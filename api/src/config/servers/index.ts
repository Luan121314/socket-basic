import httpServer from './http'
import werbsocket from './websocket'
import express from 'express';

const app = express();

(()=>{
    werbsocket(app)
    httpServer(app)
})()

export default app;


