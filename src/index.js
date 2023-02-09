//server creation
import app from './app';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';

//database creation
import { connectDB } from './db';
connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new WebsocketServer(httpServer);

io.on("connection", (socket) => {
    console.log("Im the socket");
    console.log(socket);
});
  