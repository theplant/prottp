package wrapper

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gogo/protobuf/proto"
	"github.com/theplant/appkit/server"
	"google.golang.org/grpc"
)

type Service interface {
	Description() grpc.ServiceDesc
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

func wrapMethod(service interface{}, m grpc.MethodDesc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		//func _SearchService_Search_Handler(
		dec := func(i interface{}) error {
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

		fmt.Println("handler error", err)

		b, err := proto.Marshal(resp.(proto.Message))

		fmt.Println("marshal error", err)

		w.Write(b)
	})
}
