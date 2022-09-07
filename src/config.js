import { ptr } from "bun:ffi";
import { symbols } from "./ffi";
import { encode } from "./utils";

class Server {
  constructor() {
  }

  get(route, render) {
    return symbols.CreateRoute(ptr(encode(route)), ptr(encode(render)));
  }

  listen(port) {
    return symbols.CreateServer(ptr(encode(port)));
  }

  static(staticDir) {
    return symbols.CreateStaticDir(ptr(encode(staticDir)));
  }
}

export { Server };
