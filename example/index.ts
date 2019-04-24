import express from 'express';
import health from 'express-ping';
import { createServer } from 'http';
import { Server } from 'colyseus';

// Import Rooms
import { Basic } from './rooms/basic';

const port = Number(process.env.PORT || 8080);
const app = express();

// Create HTTP Server
const httpServer = createServer(app);

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({
    server: httpServer,
    verifyClient: (info, next) => {
        // validate 'info'
        //
        // - next(false) will reject the websocket handshake
        // - next(true) will accept the websocket handshake
        next(true)
    }
});

// TODO make this configurable for prod
app.use(health.ping())

// Register Rooms
gameServer.register('basic', Basic);

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);