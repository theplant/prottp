package trace

import (
	"context"
	"fmt"
	"reflect"
	"strings"

	"github.com/sunfmin/reflectutils"
	kitlog "github.com/theplant/appkit/log"
	"github.com/theplant/prottp"
	"google.golang.org/grpc"
)

// UnaryServerInterceptor new a server interceptor
func UnaryServerInterceptor(log kitlog.Logger, traces []MethodTrace) grpc.UnaryServerInterceptor {
	for i := range traces {
		// MethodName: GetArticleById
		// FullMethod: /theplant.ec.api.blog.BlogService/GetArticleById
		traces[i].MethodName = fmt.Sprintf("/%s", traces[i].MethodName)
	}

	var findTrace = func(name string) *MethodTrace {
		for _, trace := range traces {
			if strings.HasSuffix(name, trace.MethodName) {
				return &trace
			}
		}

		return nil
	}

	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (resp interface{}, err error) {
		defer func() {
			trace := findTrace(info.FullMethod)
			if trace == nil {
				return
			}

			var result []interface{}
			if req != nil || !reflect.ValueOf(req).IsNil() {
				result = append(
					result,
					extract(req, requestPrefix, trace.RequestFields)...,
				)
			} else {
				result = append(result, requestPrefix, "<nil>")
			}
			if resp != nil && !reflect.ValueOf(resp).IsNil() {
				result = append(
					result,
					extract(resp, responsePrefix, trace.ResponseFields)...,
				)
			} else {
				result = append(result, responsePrefix, "<nil>")
			}

			ilog, ok := kitlog.FromContext(ctx)
			if !ok {
				ilog = log
			}
			ilog = ilog.With(result...)

			if r := recover(); r != nil {
				if err != nil {
					ilog = ilog.With("inner_err", err)
				}
				ilog.WrapError(fmt.Errorf("%v", r)).Log()
				panic(r)
			} else if err != nil {
				serr, ok := err.(prottp.HTTPStatusError)
				if ok {
					ilog.Info().Log(
						"http_status_code", serr.HTTPStatusCode(),
						"expect_err", err,
					)
				} else {
					ilog.Error().Log(
						"err", err,
					)
				}
			} else {
				ilog.Info().Log()
			}
		}()

		resp, err = handler(ctx, req)
		return
	}
}

// MethodTrace config RequestFields and ResponseFields for a method
type MethodTrace struct {
	MethodName string

	// https://github.com/sunfmin/reflectutils/blob/master/example_test.go
	RequestFields  []string
	ResponseFields []string
}

const (
	requestPrefix  = "Request"
	responsePrefix = "Response"
)

func extract(msg interface{}, prefix string, fields []string) []interface{} {
	var result []interface{}
	for _, f := range fields {
		e, err := reflectutils.Get(msg, f)
		ff := fmt.Sprintf("%s%s", prefix, f)
		if err != nil {
			result = append(
				result,
				ff,
				fmt.Sprintf("<err %s>", err.Error()),
			)
		} else {
			result = append(
				result,
				ff, fmt.Sprintf("%#v", e),
			)
		}
	}
	return result
}
