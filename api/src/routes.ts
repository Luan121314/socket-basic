import express, { application } from "express";
import { Socket } from "socket.io";
import app from './config/servers/index';
const router = express.Router();

router.get("/", (req, res) => {
  const socket:Socket  = app.get("io");
  console.log(socket);
  
  res.send({ response: "I am alive" }).status(200);
});

export default router;