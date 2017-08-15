package prottp

import (
	"context"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/golang/protobuf/jsonpb"

	"github.com/gogo/protobuf/proto"
	"github.com/theplant/appkit/server"
	"google.golang.org/grpc"
)

type Service interface {
	Description() grpc.ServiceDesc
}

var noop = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	// fmt.Println("In NOOP")
	return
})

func Handle(mux *http.ServeMux, service Service, mws ...server.Middleware) {
	sn := service.Description().ServiceName
	fmt.Println("/" + sn)
	hd := server.Compose(mws...)(noop)
	mux.Handle("/"+sn+"/", http.StripPrefix("/"+sn, hd))
}

func Middleware(service Service) server.Middleware {
	return func(in http.Handler) http.Handler {
		mux := http.NewServeMux()

		d := service.Description()

		for _, desc := range d.Methods {
			path := fmt.Sprintf("/%s", desc.MethodName)
			fmt.Println("/" + d.ServiceName + "/" + desc.MethodName)
			mux.Handle(path, wrapMethod(service, desc, in))
		}
		return mux
	}
}

var marshaler = jsonpb.Marshaler{
	EnumsAsInts:  false,
	EmitDefaults: false,
	Indent:       "\t",
	OrigName:     true,
}

const contextErrorKey = "prottp.contextErrorKey"

func ExecutionError(ctx context.Context) (err error) {
	if v := ctx.Value(contextErrorKey); v != nil {
		err = v.(error)
	}
	return
}

func wrapMethod(service interface{}, m grpc.MethodDesc, in http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		isJson := strings.Index(r.Header.Get("Content-Type"), "application/json") >= 0
		//func _SearchService_Search_Handler(
		dec := func(i interface{}) error {
			if isJson {
				return jsonpb.Unmarshal(r.Body, i.(proto.Message))
			}

			buff, err := ioutil.ReadAll(r.Body)
			if err != nil {
				return err
			}
			return proto.Unmarshal(buff, i.(proto.Message))
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

		if err != nil {
			fmt.Println("setting execution error to context: ", err)
			r = r.WithContext(context.WithValue(r.Context(), contextErrorKey, err))
			in.ServeHTTP(w, r)
			return
		}

		if isJson {
			w.Header().Add("Content-Type", "application/json")
			err = marshaler.Marshal(w, resp.(proto.Message))
			if err != nil {
				panic(err)
			}
		} else {
			var b []byte
			b, err = proto.Marshal(resp.(proto.Message))
			if err != nil {
				panic(err)
			}
			w.Write(b)
		}

	})
}
