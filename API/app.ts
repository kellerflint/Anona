//nodemon --watch './**/*.ts' --exec ts-node app.ts <- TODO: Doesn't work in npm script for some reason, figure that out.
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());

const port = 3000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:4200"    
    }
});

io.on("connection", (socket) => {
    console.log('A user has connected');

    socket.emit('test event', 'some data')
});

// app.get('/', (req, res) => {
//     res.send('up');
// });

httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});