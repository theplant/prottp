package trace_test

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"net/http"
	"strings"
	"testing"

	"github.com/go-kit/kit/log"
	"github.com/golang/protobuf/ptypes/empty"
	appkitlog "github.com/theplant/appkit/log"
	"github.com/theplant/prottp"
	"github.com/theplant/prottp/example"
	"github.com/theplant/prottp/trace"
	"google.golang.org/grpc"
)

func TestUnaryServerInterceptor(t *testing.T) {
	for _, tc := range testInterceptorCases {
		testUnaryServerInterceptor(t, &tc)
	}
}

func testUnaryServerInterceptor(t *testing.T, tc *testInterceptorCase) {
	var buf bytes.Buffer
	interceptor := trace.UnaryServerInterceptor(
		newLogger(&buf),
		[]trace.MethodTrace{tc.trace},
	)

	defer func() {
		actualLog := buf.String()

		if r := recover(); r != nil {
			t.Log("get a runtime err:", r)
			// debug.PrintStack()

			if fmt.Sprint(r) != tc.runtimeErr {
				t.Fatalf("name: %s\nwant err: %s\nbut get: %s\n", tc.name, tc.runtimeErr, r)
			}

			if !strings.Contains(actualLog, tc.exceptLog) {
				t.Fatalf("name: %s\nwant actual: %s\ncontains: %s\n", tc.name, actualLog, tc.exceptLog)
			}

			return
		}

		if actualLog != tc.exceptLog+"\n" {
			t.Fatalf("name: %s\nexcept: %s\nactual: %s\n", tc.name, tc.exceptLog, actualLog)
		}
	}()

	interceptor(context.Background(), tc.req, tc.info, tc.handler)
}

type testInterceptorCase struct {
	name string

	trace   trace.MethodTrace
	req     interface{}
	info    *grpc.UnaryServerInfo
	handler grpc.UnaryHandler

	exceptLog  string
	runtimeErr string
}

var testInterceptorCases = []testInterceptorCase{
	{
		name: "request sucess with some miss fields",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".[0]", ".Result.[0]"},
		},
		req: &example.SearchRequest{
			Query:         "query",
			PageNumber:    1,
			ResultPerPage: 10,
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			return &example.SearchResponse{
				Result: []*example.Result{
					{
						Url:      "/url",
						Title:    "tile",
						Snippets: "snippets",
					},
				},
			}, nil
		},

		exceptLog: `level=info full_method=/example.SearchService/Search request.Query=query request.PageNumber=1 request.ResultPerPage=10 response.[0]="<err no such field.>" response.Result.[0]="url:\"/url\" title:\"tile\" snippets:\"snippets\" "`,
	},
	{
		name: "request return normal error",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			return nil, errors.New("an inner error")
		},

		exceptLog: `level=error full_method=/example.SearchService/Search request.Query=query request.PageNumber=0 request.ResultPerPage=0 response=<nil> err="an inner error"`,
	},

	{
		name: "request return proto error",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			return nil, prottp.NewError(http.StatusUnauthorized, &empty.Empty{})
		},

		exceptLog: `level=info full_method=/example.SearchService/Search request.Query=query request.PageNumber=0 request.ResultPerPage=0 response=<nil> http_status_code=401 expect_err="prottp error"`,
	},

	{
		name: "request return error with resp",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			return &example.SearchResponse{
				Result: []*example.Result{
					{
						Url:      "/url",
						Title:    "tile",
						Snippets: "snippets",
					},
				},
			}, errors.New("an inner error")
		},

		exceptLog: `level=error full_method=/example.SearchService/Search request.Query=query request.PageNumber=0 request.ResultPerPage=0 response.Result="[url:\"/url\" title:\"tile\" snippets:\"snippets\" ]" err="an inner error"`,
	},

	{
		name: "request panic",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			panic(errors.New("system error"))
		},

		exceptLog:  `github.com/theplant/prottp/trace/trace_test.go:194`,
		runtimeErr: "system error",
	},

	{
		name: "request nil point",

		trace: trace.MethodTrace{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			var p *example.SearchRequest
			fmt.Println(p.Query)
			panic("must nil point in above")
		},

		exceptLog:  `github.com/theplant/prottp/trace/trace_test.go:218`,
		runtimeErr: "runtime error: invalid memory address or nil pointer dereference",
	},

	{
		name: "call handler not has trace",

		trace: trace.MethodTrace{},
		req: &example.SearchRequest{
			Query: "query",
		},
		info: &grpc.UnaryServerInfo{
			FullMethod: "/example.SearchService/Search",
		},
		handler: func(ctx context.Context, req interface{}) (interface{}, error) {
			panic("must exec handler when not has trace")
		},

		exceptLog:  ``,
		runtimeErr: `must exec handler when not has trace`,
	},
}

func newLogger(buf *bytes.Buffer) appkitlog.Logger {
	l := log.NewLogfmtLogger(buf)
	lg := appkitlog.Logger{
		Logger: l,
	}
	return lg
}
