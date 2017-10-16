package prottp

import (
	"bytes"
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/ptypes/empty"

	"github.com/gogo/protobuf/proto"
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

type key int

const headerKey key = iota

func WithHeader(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		newCtx := context.WithValue(ctx, headerKey, http.Header{})
		h.ServeHTTP(w, r.WithContext(newCtx))
	})
}

func ForceHeader(ctx context.Context) (h http.Header) {
	h = ctx.Value(headerKey).(http.Header)
	if h == nil {
		panic("no header in context, please setup prottp.WithHeader middleware")
	}
	return
}

func Handle(mux *http.ServeMux, service Service, mws ...server.Middleware) {
	sn := service.Description().ServiceName
	fmt.Println("/" + sn)
	hd := Wrap(service)
	if len(mws) > 0 {
		hd = server.Compose(mws...)(hd)
	}
	mux.Handle("/"+sn+"/", http.StripPrefix("/"+sn, hd))
}

func Wrap(service Service) http.Handler {
	mux := http.NewServeMux()

	d := service.Description()

	for _, desc := range d.Methods {
		fmt.Println("/" + d.ServiceName + "/" + desc.MethodName)
		mux.Handle("/"+desc.MethodName, wrapMethod(service, desc))
	}

	return mux
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

func isRequestJSON(r *http.Request) bool {
	return strings.Index(r.Header.Get("Content-Type"), "application/json") >= 0
}

func wrapMethod(service interface{}, m grpc.MethodDesc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		isJSON := isRequestJSON(r)
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

		var interceptor grpc.UnaryServerInterceptor
		//		interceptor := func(ctx context.Context, req interface{}, info *UnaryServerInfo, handler UnaryHandler) (resp interface{}, err error) {
		//			fmt.Println("req", req)
		//		}

		//) (interface{}, error) {
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
	h, ok := r.Context().Value(headerKey).(http.Header)
	if ok && len(h) > 0 {
		for k, v := range h {
			if len(v) > 0 {
				w.Header().Set(k, v[0])
			}
		}
	}
	var err error
	isJSON := isRequestJSON(r)
	if isJSON && w.Header().Get("Content-Type") == "" {
		w.Header().Add("Content-Type", "application/json")
	}

	if statusCode > 0 {
		w.WriteHeader(statusCode)
	}

	// start write body
	if isJSON {
		buf := bytes.NewBuffer(nil)
		err = marshaler.Marshal(buf, msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "marshal message to json error", "response", msg))
		}
		w.Write(buf.Bytes())
	} else {
		var b []byte
		b, err = proto.Marshal(msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "marshal message to proto error", "response", msg))
		}
		w.Write(b)
	}
}
