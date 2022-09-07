import { Server } from "./src/config";

// Instance a new server
const server = new Server();
// Static Dir
server.static("static")
// Routes
server.get("/home", "./templates/home.html");
server.get("/contact", "./templates/contact.html");
// Server Listen
server.listen("4000")