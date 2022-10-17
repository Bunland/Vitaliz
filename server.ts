import { Server } from "./src/config";
// Instance a new server
const server = new Server();
// Static Dir
server.static("static")
// Routes
server.render("/", "./templates/index.html");
server.render("/home", "./templates/home.html")
// Server Listen
server.listen("4000")