package main

import (
	"fmt"
	"net/http"

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

func main() {
	mux := http.NewServeMux()
	s := search{}

	for _, desc := range _SearchService_serviceDesc.Methods {
		mux.Handle("/"+desc.MethodName, wrapper.Wrap(s, desc))
	}
	fmt.Println("OK, GO")
	http.ListenAndServe(":8080", mux)
}
