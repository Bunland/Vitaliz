import { dlopen, suffix, FFIType, ptr } from "bun:ffi";

const path = `./server.${suffix}`;

const location = new URL(path, import.meta.url).pathname

const { symbols } = dlopen(location, {
    CreateServer: {
        args: [FFIType.ptr],
    },
    CreateRoute: {
        args: [FFIType.ptr, FFIType.ptr]
    },
   
    CreateStaticDir: {
        args: [FFIType.ptr, FFIType.ptr]
    }
})

export {
    symbols
}