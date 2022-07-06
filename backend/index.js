const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", (req, res) => {
  console.log("testing");
  const temp = fs.readFileSync("./data/info.json", "utf-8");
  res.send(temp);
});
app.listen("3000");
