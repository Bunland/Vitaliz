import { dlopen, suffix, FFIType, ptr } from "bun:ffi";

const path = `./server.${suffix}`;

const { symbols } = dlopen(path, {
    CreateServer: {
        args: [FFIType.ptr],
        // returns: []
    },
    CreateRoute: {
        args: [FFIType.ptr, FFIType.ptr]
    },
   
    CreateStaticDir: {
        args: [FFIType.ptr, FFIType.ptr]
    }
})

const port = "4000";
const staticDir = "static";

const utf = new TextEncoder();
const encode = (data) => utf.encode(data + "\0");

symbols.CreateStaticDir(ptr(encode(staticDir)))

const home = "/home";
const fileHome = "./templates/home.html";

// const contact = "/contact";
// const fileContact = "./static/contact.html";

// const publicRouter = "/static/";
// const publicDir = "./static";




// symbols.CreateRoute(ptr(encode(publicRouter)), ptr(encode(fileHome)) )

symbols.CreateRoute(ptr(encode(home)), ptr(encode(fileHome)) )
// symbols.CreateRoute(ptr(encode(contact)), ptr(encode(fileContact)))
symbols.CreateServer(ptr(encode(port)));