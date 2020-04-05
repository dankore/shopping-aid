const express = require("express");
const server = express();
const port = 8080;

server.get("/", (req, res)=>{
  res.send("hi")
})

server.listen(port, () =>{
  `Server listening on ${port}`
})