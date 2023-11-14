const express = require("express");
const app = express();

const serverConfig = require("./configs/server.config");
const port = serverConfig.port;

app.get("/", (req, res) => {
  res.send("Welcome on SwetHub API!");
});

app.listen(port, () => {
  console.log(`Swethub API listening on port ${port}`);
});
