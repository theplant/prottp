package main

import (
	"fmt"
	"net/http"

	"github.com/rs/cors"
	"github.com/theplant/appkit/log"
	"github.com/theplant/appkit/server"
	"github.com/theplant/prottp/example"
)

func main() {

	mux := http.NewServeMux()
	example.Mount(mux)
	l := log.Default()

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
	})

	defaultmws := server.Compose(
		c.Handler,
		server.DefaultMiddleware(l),
	)

	fmt.Println("OK, GO")
	err := http.ListenAndServe(":8080", defaultmws(mux))
	if err != nil {
		panic(err)
	}
}
