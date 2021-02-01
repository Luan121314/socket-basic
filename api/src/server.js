const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const routes = require('./routes')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(routes);

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!


let interval;


io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  socket.on("message", data => {
    console.log(data);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};


const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Listening on port ${port}`));