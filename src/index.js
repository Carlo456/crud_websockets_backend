//server creation
import app from './app';
import { Server as WebsocketServer } from 'socket.io';
import http from 'http';
import { PORT } from './config';

//database creation
import { connectDB } from './db';

connectDB();

//socket functions imports and configs
import sockets from './sockets';
import { socketOptions } from './config';

const server = http.createServer(app);
const io = new WebsocketServer(server, socketOptions);

sockets(io);

server.listen(PORT || 8000);