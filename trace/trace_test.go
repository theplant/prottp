package trace_test

import (
	"bytes"
	"context"
	"errors"
	"fmt"
	"net/http"
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
		if r := recover(); r != nil {
			fmt.Println("get a runtime err:", r)
			// debug.PrintStack()
		}

		actualLog := buf.String()
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

	exceptLog string
}

var testInterceptorCases = []testInterceptorCase{
	{
		name: "request sucess with some miss fileds",

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

		exceptLog: `level=info full_method=/example.SearchService/Search request.Query=query request.PageNumber=1 request.ResultPerPage=10 response.[0]="<err no such field.>" response.Result.[0]="{Url:/url Title:tile Snippets:snippets SomeSnakedName:0}"`,
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

		exceptLog: `level=error full_method=/example.SearchService/Search request.Query=query request.PageNumber=0 request.ResultPerPage=0 response=<nil> msg="system error: system error" stacktrace="system error\ngithub.com/theplant/appkit/kerrs.Wrapv\n\t/Users/jaden/work/src/github.com/theplant/appkit/kerrs/errors.go:27\ngithub.com/theplant/appkit/log.Logger.WrapError\n\t/Users/jaden/work/src/github.com/theplant/appkit/log/log.go:43\ngithub.com/theplant/prottp/trace.UnaryServerInterceptor.func1.1\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace.go:51\nruntime.call64\n\t/usr/local/go/src/runtime/asm_amd64.s:523\nruntime.gopanic\n\t/usr/local/go/src/runtime/panic.go:513\ngithub.com/theplant/prottp/trace_test.glob..func5\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:181\ngithub.com/theplant/prottp/trace.UnaryServerInterceptor.func1\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace.go:70\ngithub.com/theplant/prottp/trace_test.testUnaryServerInterceptor\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:45\ngithub.com/theplant/prottp/trace_test.TestUnaryServerInterceptor\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:22\ntesting.tRunner\n\t/usr/local/go/src/testing/testing.go:827\nruntime.goexit\n\t/usr/local/go/src/runtime/asm_amd64.s:1333"`,
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

		exceptLog: `level=error full_method=/example.SearchService/Search request.Query=query request.PageNumber=0 request.ResultPerPage=0 response=<nil> msg="runtime error: invalid memory address or nil pointer dereference: runtime error: invalid memory address or nil pointer dereference" stacktrace="runtime error: invalid memory address or nil pointer dereference\ngithub.com/theplant/appkit/kerrs.Wrapv\n\t/Users/jaden/work/src/github.com/theplant/appkit/kerrs/errors.go:27\ngithub.com/theplant/appkit/log.Logger.WrapError\n\t/Users/jaden/work/src/github.com/theplant/appkit/log/log.go:43\ngithub.com/theplant/prottp/trace.UnaryServerInterceptor.func1.1\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace.go:51\nruntime.call64\n\t/usr/local/go/src/runtime/asm_amd64.s:523\nruntime.gopanic\n\t/usr/local/go/src/runtime/panic.go:513\nruntime.panicmem\n\t/usr/local/go/src/runtime/panic.go:82\nruntime.sigpanic\n\t/usr/local/go/src/runtime/signal_unix.go:390\ngithub.com/theplant/prottp/trace_test.glob..func6\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:204\ngithub.com/theplant/prottp/trace.UnaryServerInterceptor.func1\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace.go:70\ngithub.com/theplant/prottp/trace_test.testUnaryServerInterceptor\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:45\ngithub.com/theplant/prottp/trace_test.TestUnaryServerInterceptor\n\t/Users/jaden/work/src/github.com/theplant/prottp/trace/trace_test.go:22\ntesting.tRunner\n\t/usr/local/go/src/testing/testing.go:827\nruntime.goexit\n\t/usr/local/go/src/runtime/asm_amd64.s:1333"`,
	},
}

func newLogger(buf *bytes.Buffer) appkitlog.Logger {
	l := log.NewLogfmtLogger(buf)
	lg := appkitlog.Logger{
		Logger: l,
	}
	return lg
}
