// require("dotenv").config();
require('dotenv').config()
const express = require("express");
const server = express();
const router = require("./router")
const port = process.env.PORT;




server.set("views", "view");
server.set("view engine", "ejs");
server.use(express.static("public"));

// server.listen(port, () => {
//   console.log(`Server listening on ${port}`);
// })
server.use("/", router);
module.exports = server;