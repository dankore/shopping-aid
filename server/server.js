// require("dotenv").config();
require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./router");
const bodyParser = require("body-parser");
const port = process.env.PORT;

server.set("views", "view");
server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());

server.use("/", router);
module.exports = server;
