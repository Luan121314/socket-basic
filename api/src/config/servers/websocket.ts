import Contador from '../../contador';
import http from "http";
import express from "express";
import { Server, Socket } from "socket.io";

function websocket(app: express.Application) {
  const websocketServer = http.createServer(app);
  const io = new Server(websocketServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  }); // < Interesting!


  
  io.on("connection", (socket: Socket) => {
    console.log("New client on id: ", socket.id);
    const contador = new Contador()
    const sending = (data: string) => socket.emit("FromAPI", data)
    contador.init(sending);
    
    socket.on("disconnect", () => {
      console.log(" disconnected");
    });

  });

  
  app.set("io", io);
  const port = process.env.PORT || 4001;
  websocketServer.listen(port, () => console.log(`Socket running on port ${port}`));
}


export default websocket;