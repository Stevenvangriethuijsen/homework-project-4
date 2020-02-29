const express = require("express");
const bodyParser = require("body-parser");
const movieRouter = require("./movie/router");

const app = express();
const jsonParser = bodyParser.json();
app.use(jsonParser);

const port = 4000;

app.listen(port, () =>
  console.log(`Port ${port} confirmed, autobots Roll out!`)
);
