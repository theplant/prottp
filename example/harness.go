package example

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/prottp"
	"github.com/theplant/prottp/trace"
	vproto "github.com/theplant/validator/proto"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

var _ SearchServiceServer = (*search)(nil)

type search struct{}

func (s search) Search(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SEARCH", r)
	return &SearchResponse{
		Result: []*Result{
			{Url: r.Query, SomeSnakedName: 2},
		},
	}, nil
}

func (s search) SearchAlt(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SEARCH ALT", r)
	return &SearchResponse{
		Result: []*Result{&Result{Url: "Search alt"}}}, nil

}

func (s search) SearchReturnError(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SearchReturnError", r)
	return nil, prottp.NewError(500, &SearchError{Field: "field123", ErrorCount: 100})
}

func (s search) SearchValidateError(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SearchReturnError", r)
	return nil, &vproto.Error{
		Code: "Hello",
		Msg:  "Some fields are error",
	}
}

func (s search) SearchReturnNil(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SearchReturnNil", r)
	return nil, nil
}

func (s search) SearchWithUnexpectedError(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SearchWithUnexpectedError", r)
	return nil, io.EOF
}

func (s search) Description() grpc.ServiceDesc {
	return _SearchService_serviceDesc
}

type account struct{}

func (s account) GetAccountInfo(ctx context.Context, r *GetAccountInfoParams) (*AccountInfo, error) {
	fmt.Println("AccountID", r)
	fmt.Println("GetAccountInfo", r)
	return &AccountInfo{}, nil

}

func (s account) Description() grpc.ServiceDesc {
	return _AccountService_serviceDesc
}

type auth struct{}

func (s auth) Login(ctx context.Context, r *LoginParams) (*LoginResult, error) {
	h := server.ForceHeader(ctx)
	fmt.Println("setting cookie")
	h.Set("Set-Cookie", "cookie")
	return &LoginResult{}, nil
}

func (s auth) Description() grpc.ServiceDesc {
	return _AuthService_serviceDesc
}

func mustLogin(in http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if true {
			w.WriteHeader(http.StatusForbidden)
			return
		}
		r = r.WithContext(context.WithValue(r.Context(), "AccountID", 1))
		in.ServeHTTP(w, r)
	})
}

func Mount(mux *http.ServeMux, l log.Logger) {
	a := account{}
	s := search{}
	au := auth{}

	var sinterceptor = trace.UnaryServerInterceptor(l, []trace.MethodTrace{
		{
			MethodName: "Search",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".[0]", ".Result.[0]"},
		},
		{
			MethodName: "SearchAlt",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{},
		},
		{
			MethodName: "SearchReturnError",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{},
		},
		{
			MethodName: "SearchValidateError",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{},
		},
		{
			MethodName: "SearchReturnNil",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{".Result"},
		},
		{
			MethodName: "SearchWithUnexpectedError",

			RequestFields:  []string{".Query", ".PageNumber", ".ResultPerPage"},
			ResponseFields: []string{},
		},
	})

	var auinterceptor = trace.UnaryServerInterceptor(l, []trace.MethodTrace{
		{
			MethodName: "Login",

			RequestFields:  []string{".Username"},
			ResponseFields: []string{".Status"},
		},
	})

	prottp.Handle(mux, a, mustLogin)
	prottp.HandleWithInterceptor(mux, au, auinterceptor, server.WithHeader)
	prottp.HandleWithInterceptor(mux, s, sinterceptor)

	mux.HandleFunc("/large_response_not_auto_set_content_length", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, err := w.Write(LargeJsonResponse())
		if err != nil {
			panic(err)
		}
	})
}

func LargeJsonResponse() []byte {
	data, err := json.Marshal(strings.Repeat("*", 1024*10))
	if err != nil {
		panic(err)
	}
	return data
}
