// require("dotenv").config();
require('dotenv').config()
const express = require("express");
const server = express();
const router = require("./router")
const port = process.env.PORT;



server.use("/", router);

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})
module.exports = server;