package prottp

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/ptypes/empty"
	"github.com/theplant/appkit/kerrs"
	"github.com/theplant/appkit/server"
	"google.golang.org/grpc"
)

type Service interface {
	Description() grpc.ServiceDesc
}

type HTTPStatusError interface {
	HTTPStatusCode() int
}

type ErrorResponse interface {
	Message() proto.Message
}

type ErrorWithStatus interface {
	HTTPStatusError
	ErrorResponse
	error
}

type respError struct {
	statusCode int
	body       proto.Message
}

func (re *respError) Message() proto.Message {
	return re.body
}

func (re *respError) HTTPStatusCode() int {
	if re.statusCode == 0 {
		return http.StatusUnprocessableEntity
	}
	return re.statusCode
}

func (re *respError) Error() string {
	return "prottp error"
}

func NewError(statusCode int, body proto.Message) ErrorWithStatus {
	return &respError{statusCode: statusCode, body: body}
}

func Handle(mux *http.ServeMux, service Service, mws ...server.Middleware) {
	HandleWithInterceptor(mux, service, nil, mws...)
}

func Wrap(service Service) http.Handler {
	return WrapWithInterceptor(service, nil)
}

func WrapWithInterceptor(service Service, interceptor grpc.UnaryServerInterceptor) http.Handler {
	mux := http.NewServeMux()

	d := service.Description()

	for _, desc := range d.Methods {
		fmt.Println("/" + d.ServiceName + "/" + desc.MethodName)
		mux.Handle("/"+desc.MethodName, wrapMethod(service, desc, interceptor))
	}

	return mux
}

func HandleWithInterceptor(mux *http.ServeMux, service Service, interceptor grpc.UnaryServerInterceptor, mws ...server.Middleware) {
	sn := service.Description().ServiceName
	fmt.Println("/" + sn)
	hd := WrapWithInterceptor(service, interceptor)
	if len(mws) > 0 {
		hd = server.Compose(mws...)(hd)
	}
	mux.Handle("/"+sn+"/", http.StripPrefix("/"+sn, hd))
}

var marshaler = jsonpb.Marshaler{
	EnumsAsInts:  false,
	EmitDefaults: false,
	Indent:       "\t",
	OrigName:     true,
}

var unmarshaler = jsonpb.Unmarshaler{
	AllowUnknownFields: false,
}

const jsonContentType = "application/json"
const xprottpContentType = "application/x.prottp"
const protoContentType = "application/proto"

func isMimeTypeJSON(contentType string) bool {
	return strings.Index(strings.ToLower(contentType), jsonContentType) >= 0
}

func isContentTypeJSON(r *http.Request) bool {
	return isMimeTypeJSON(r.Header.Get("Content-Type"))
}

func shouldReturnJSON(r *http.Request) bool {
	acceptString := strings.ToLower(r.Header.Get("Accept"))
	if len(acceptString) == 0 {
		return isContentTypeJSON(r)
	}
	
	jsonIndex := strings.Index(acceptString, jsonContentType)
	xprottpIndex := strings.Index(acceptString, xprottpContentType)
	protoIndex := strings.Index(acceptString, protoContentType)

	if jsonIndex < 0 && xprottpIndex < 0 && protoIndex < 0 {
		return isContentTypeJSON(r)
	}

	if jsonIndex < 0 {
		jsonIndex = 9999
	}
	if xprottpIndex < 0 {
		xprottpIndex = 10000
	}
	if protoIndex < 0 {
		protoIndex = 10001
	}

	return jsonIndex < xprottpIndex && jsonIndex < protoIndex
}

func wrapMethod(service interface{}, m grpc.MethodDesc, interceptor grpc.UnaryServerInterceptor) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		isJSON := isMimeTypeJSON(r.Header.Get("Content-Type"))
		dec := func(i interface{}) (err error) {
			defer func() {
				if err != nil {
					err = NewError(http.StatusBadRequest, &empty.Empty{})
				}
			}()
			if isJSON {
				err = unmarshaler.Unmarshal(r.Body, i.(proto.Message))
				return
			}

			var buff []byte
			buff, err = ioutil.ReadAll(r.Body)
			if err != nil {
				return
			}
			err = proto.Unmarshal(buff, i.(proto.Message))
			return
		}

		resp, err := m.Handler(
			//srv interface{},
			service,
			//ctx context.Context,
			r.Context(),
			//dec func(interface{}) error,
			dec,
			//interceptor grpc.UnaryServerInterceptor
			interceptor)

		statusCode := 0
		if err != nil {
			handled := false
			if statusErr, ok := err.(HTTPStatusError); ok {
				handled = true
				statusCode = statusErr.HTTPStatusCode()
			}
			if msgErr, ok := err.(ErrorResponse); ok {
				WriteMessage(statusCode, msgErr.Message(), w, r)
				handled = true
			}

			if !handled {
				panic(err)
			}
			return
		}
		WriteMessage(statusCode, resp.(proto.Message), w, r)
	})
}

// WriteMessage is exported to be used for middleware to return proto message
func WriteMessage(statusCode int, msg proto.Message, w http.ResponseWriter, r *http.Request) {
	var err error
	var isJSON = isMimeTypeJSON(w.Header().Get("Content-Type"))
	if w.Header().Get("Content-Type") == "" {
		isJSON = shouldReturnJSON(r)
		contentType := xprottpContentType
		if isJSON {
			contentType = jsonContentType
		} else if strings.Index(strings.ToLower(r.Header.Get("Accept")), protoContentType) >= 0 {
			contentType = protoContentType
		}
		w.Header().Set("Content-Type", contentType)
	}

	// start write body
	var b []byte

	if isJSON {
		buf := bytes.NewBuffer(nil)
		err = marshaler.Marshal(buf, msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "marshal message to json error", "response", msg))
		}
		b = buf.Bytes()
	} else {
		b, err = proto.Marshal(msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "marshal message to proto error", "response", msg))
		}
	}

	if statusCode == 0 {
		statusCode = http.StatusOK
	}

	// see "large respone http server not auto send Content-Length" test case
	w.Header().Set("Content-Length", strconv.Itoa(len(b)))

	w.WriteHeader(statusCode)
	w.Write(b)
}
