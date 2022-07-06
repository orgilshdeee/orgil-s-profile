const express = require("express");
const app = express();
const fs = require("fs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  console.log("testing");
  const temp = fs.readFileSync("./data/info.json", "utf-8");
  // res.json(temp);
  res.send(temp);
});
app.listen("3000");
