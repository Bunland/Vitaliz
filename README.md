# Vitaliz
A small server made with Golang, which works with bun.js

For now we can create routes and server static files in each of them.

More functions will be added later.

Feel free to contribute if you wish.

PS: The binaries and the main GO file can be found in the src folder.

For Run

```
bun server.js
```

For Compile server.go

```
go build --buildmode c-shared -o ./server.dylib server.go
```
