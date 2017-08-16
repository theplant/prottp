package main

import (
	"fmt"
	"net/http"

	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/prottp/example"
)

func main() {

	mux := http.NewServeMux()
	example.Mount(mux)
	l := log.Default()
	defaultmws := server.Compose(
		server.DefaultMiddleware(l),
	)

	fmt.Println("OK, GO")
	err := http.ListenAndServe(":8080", defaultmws(mux))
	if err != nil {
		panic(err)
	}
}
