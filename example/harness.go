package example

import (
	"fmt"
	"io"
	"net/http"

	"google.golang.org/grpc"

	"golang.org/x/net/context"

	"github.com/theplant/prottp"
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
	return nil, prottp.NewError(500, "wrong message", &SearchError{Field: "field123", ErrorCount: 100})
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

func mustLogin(in http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if true {
			http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		}
		r = r.WithContext(context.WithValue(r.Context(), "AccountID", 1))
		in.ServeHTTP(w, r)
	})
}

func Mount(mux *http.ServeMux) {
	a := account{}
	s := search{}

	prottp.Handle(mux, a, mustLogin)
	prottp.Handle(mux, s)
}
