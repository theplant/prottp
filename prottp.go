package prottp

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/golang/protobuf/jsonpb"

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

func wrapMethod(service interface{}, m grpc.MethodDesc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		isJson := strings.Index(r.Header.Get("Content-Type"), "application/json") >= 0
		dec := func(i interface{}) (err error) {
			defer func() {
				if err != nil {
					err = NewError(http.StatusBadRequest, nil)
				}
			}()
			if isJson {
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

		if isJson {
			w.Header().Add("Content-Type", "application/json")
		}

		if err != nil {
			handled := false
			if statusErr, ok := err.(HTTPStatusError); ok {
				w.WriteHeader(statusErr.HTTPStatusCode())
				handled = true
			}
			if msgErr, ok := err.(ErrorResponse); ok {
				writeMessage(isJson, msgErr.Message(), 0, w)
				handled = true
			}

			if !handled {
				panic(err)
			}
			return
		}
		writeMessage(isJson, resp.(proto.Message), http.StatusOK, w)
	})
}

func writeMessage(isJson bool, msg proto.Message, statusCode int, w http.ResponseWriter) {
	var err error

	// if msg == nil || reflect.ValueOf(msg).IsNil() {
	// 	if statusCode == http.StatusOK {
	// 		w.WriteHeader(http.StatusNoContent)
	// 	}
	// 	return
	// }

	if isJson {
		buf := bytes.NewBuffer(nil)
		err = marshaler.Marshal(buf, msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "Marshal message to json error", "response", msg))
		}
		if statusCode > 0 {
			w.WriteHeader(statusCode)
		}
		w.Write(buf.Bytes())
	} else {
		var b []byte
		b, err = proto.Marshal(msg)
		if err != nil {
			panic(kerrs.Wrapv(err, "Marshal message to proto error", "response", msg))
		}
		if statusCode > 0 {
			w.WriteHeader(statusCode)
		}
		w.Write(b)
	}
}
