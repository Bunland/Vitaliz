package main

/*
#include <stdlib.h>
#include <string.h>
*/
import "C"

import (
	"fmt"
	"io"

	// "io"
	"net/http"
)

func ch(str string) *C.char {
	return C.CString(str)
}

func str(ch *C.char) string {
	return C.GoString(ch)
}

func Get(r *C.char) *C.char {
	route := str(r)
	var result *string
	http.HandleFunc(route, func(w http.ResponseWriter, r *http.Request) {
		// defer r.Body.Close()
		buf, err := io.ReadAll(r.Body)
		checkNilErr(err)
		x := string(buf)
		result = &x
	})
	return ch(*result)
}

//export CreateStaticDir
func CreateStaticDir(d *C.char) {
	static := str(d)
	fs := http.FileServer(http.Dir("./" + static))
	http.Handle(static, fs)
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
	err := http.ListenAndServe(":"+port, nil)
	checkNilErr(err)
}

func checkNilErr(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {}
