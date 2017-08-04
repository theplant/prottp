package main

import (
	"fmt"
	"net/http"

	"google.golang.org/grpc"

	"golang.org/x/net/context"

	"./wrapper"
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

func main() {
	s := search{}

	mux := wrapper.Wrap(s)

	fmt.Println("OK, GO")

	http.ListenAndServe(":8080", mux)
}
