require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    module.exports = client;
    const port = process.env.PORT;
    const server = require("./server/server");
    server.listen(port, (_) => console.log("listening on " + port));
  })
  .catch((err) => console.log(`Error connect to DB: ${err}`));
