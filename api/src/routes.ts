import express from "express";
import { Socket } from "socket.io";
import app from './config/servers/index';
const router = express.Router();

router.get("/:name/:nickname", (req, res) => {
  const socket:Socket  = app.get("io")
  const {name, nickname} = req.params
  socket.emit("sendOthersUsers", {name ,  nickname })
  
  res.send({ response: "I am alive" }).status(200);
});

export default router;