package wrapper

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gogo/protobuf/proto"
	"google.golang.org/grpc"
)

func Wrap(service interface{}, m grpc.MethodDesc) http.Handler {
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
