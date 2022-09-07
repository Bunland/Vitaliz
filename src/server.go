package main

/*
#include <stdlib.h>
#include <string.h>
*/
import "C"

import (
	"fmt"
	"net/http"
)

func str(ch *C.char) string {
	return C.GoString(ch)
}

//export CreateStaticDir
func CreateStaticDir(d *C.char) {
	static := str(d)
	http.Handle("/"+static+"/", http.StripPrefix("/"+static+"/", http.FileServer(http.Dir(static))))
}

//export CreateRoute
func CreateRoute(r *C.char, f *C.char) {
	file := str(f)
	route := str(r)
	http.HandleFunc(route, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, file)
	})
}

//export CreateServer
func CreateServer(p *C.char) {
	port := str(p)
	fmt.Println("Server on port", port)
	http.ListenAndServe(":"+port, nil)
}

func main() {}
