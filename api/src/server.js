const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const routes = require('./routes')
const cors = require('cors')
const Contador = require('./contador')


const app = express();
app.use(cors());

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!


let interval;


io.on("connection", (socket) => {
  const contador = new Contador()
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket, contador.start), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
  
  socket.on("message", data => {
    console.log(data);
  });
  
  console.log("New client connected");
  const getApiAndEmit = (socket, contar) => {
    socket.emit("FromAPI", contar());
  };

});

const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));