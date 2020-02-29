const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);

const port = 3000;

app.post("/messages", (req, res, next) => {
  console.log("test text property of body", req.body.text);
  res.json({ message: "This is the message that was sent" });
});

app.listen(port, () =>
  console.log(
    `Starport ${port} activated! Ready for intergalactic datatransfer`
  )
);
