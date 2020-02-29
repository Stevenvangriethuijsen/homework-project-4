const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();

const limitMiddleware = function(req, res, next) {
  if (!req.body.text && count < 5) {
    console.log("test text property of body", req.body.text);
    count++;
    console.log(count);
    res.status(400).json({ message: "error error Nooooboody, does it better" });
  } else if (!req.body.text && count >= 5) {
    res.status(429).json({
      message: "Overloading to many requests Self Destruct Initiated"
    });
  }
};

app.use(jsonParser);
app.use(limitMiddleware);

const port = 3000;
let count = 0;
app.post("/messages", function(req, res, next) {
  // if (!req.body.text && count < 5) {
  //   console.log("test text property of body", req.body.text);
  //   count++;
  //   console.log(count);
  //   res.status(400).json({ message: "error error Nooooboody, does it better" });
  // } else if (!req.body.text && count >= 5) {
  //   res.status(429).json({
  //     message: "Overloading to many requests Self Destruct Initiated"
  //   });
  // } else {
  console.log(req.body.text);
  res.json({ message: "This is the the message that was sent" });
  // }
});

app.listen(port, () =>
  console.log(
    `Starport ${port} activated! Ready for intergalactic datatransfer`
  )
);
