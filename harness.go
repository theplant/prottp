package test

import (
	"fmt"
	"net/http"

	"golang.org/x/net/context"
)

type search struct{}

func (s search) Search(context.Context, *SearchRequest) (*SearchResponse, error) {
	return &SearchResponse{}, nil
}

func (s search) SearchAlt(context.Context, *SearchRequest) (*SearchResponse, error) {
	return &SearchResponse{}, nil
}

//func wrapper(h func(context.Context, proto.Message) (*proto.Message, error)) http.Handler {
func wrapper(h func(context.Context, *SearchRequest) (*SearchResponse, error)) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// read request
		s := &SearchRequest{}
		resp, err := h(r.Context(), s)
		// write result/error
		fmt.Println(resp, err)
	})
}

func run() {
	s := search{}
	wrapper(s.Search)
}
