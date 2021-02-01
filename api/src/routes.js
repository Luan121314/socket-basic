const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log('new request connection socket');
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;