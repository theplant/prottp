package main

import (
	"errors"
	"fmt"
	"net/http"

	"google.golang.org/grpc"

	"golang.org/x/net/context"

	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/prottp"
)

type search struct{}

func (s search) Search(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SEARCH", r)
	return &SearchResponse{
		Result: []*Result{&Result{Url: r.Query}}}, nil

}

func (s search) SearchAlt(ctx context.Context, r *SearchRequest) (*SearchResponse, error) {
	fmt.Println("SEARCH ALT", r)
	return nil, errors.New("You got an error")

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

func mustLogin(in http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if true {
			http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		}
		r = r.WithContext(context.WithValue(r.Context(), "AccountID", 1))
		in.ServeHTTP(w, r)
	})
}

func errHandler(in http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("errHandler before call next")
		in.ServeHTTP(w, r)
		fmt.Println("prottp.ExecutionError(r.Context()) = ", prottp.ExecutionError(r.Context()))
		if err := prottp.ExecutionError(r.Context()); err != nil {
			panic(err)
		}
	})
}

func main() {

	mux := http.NewServeMux()
	a := account{}
	s := search{}

	prottp.Handle(mux, a, errHandler, prottp.Middleware(a), mustLogin)
	prottp.Handle(mux, s, errHandler, prottp.Middleware(s))

	l := log.Default()
	defaultmws := server.Compose(
		server.DefaultMiddleware(l),
	)

	fmt.Println("OK, GO")
	http.ListenAndServe(":8080", defaultmws(mux))
}
