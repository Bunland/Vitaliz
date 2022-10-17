import { ptr } from "bun:ffi";
import { symbols } from "./ffi";
import { encode } from "./utils";

class Server {
  constructor() {
  }

  render(route: string , render: string) {
    return symbols.CreateRoute(ptr(encode(route)), ptr(encode(render)));
  }
  
  listen(port: string ) {
    return symbols.CreateServer(ptr(encode(port)));
  }

  static(staticDir: string) {
    return symbols.CreateStaticDir(ptr(encode(staticDir)));
  }
}

export { Server };
