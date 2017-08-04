package main

import (
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
	return &SearchResponse{
		Result: []*Result{&Result{Url: "Search alt"}}}, nil

}

func (s search) Description() grpc.ServiceDesc {
	return _SearchService_serviceDesc
}

type account struct{}

func (s account) GetAccountInfo(ctx context.Context, r *GetAccountInfoParams) (*AccountInfo, error) {
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
		in.ServeHTTP(w, r)
	})
}

func main() {

	mux := http.NewServeMux()
	a := account{}
	s := search{}

	prottp.Handle(mux, a, mustLogin)
	prottp.Handle(mux, s)

	l := log.Default()
	defaultmws := server.Compose(
		server.DefaultMiddleware(l),
	)

	fmt.Println("OK, GO")
	http.ListenAndServe(":8080", defaultmws(mux))
}
