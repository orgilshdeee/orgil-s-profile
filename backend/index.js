const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", cors(), (req, res) => {
  console.log("sending description.json");
  const temp = fs.readFileSync("./data/description.json", "utf-8");
  res.send(temp);
});

app.get("/profile", cors(), (req, res) => {
  console.log("sending profile.json");
  const temp = fs.readFileSync("./data/profile.json", "utf-8");
  res.send(temp);
});

app.get("/major", cors(), (req, res) => {
  console.log("sending major.json");
  const temp = fs.readFileSync("./data/major.json", "utf-8");
  res.send(temp);
});

app.get("/name", cors(), (req, res) => {
  console.log("sending name.json");
  const temp = fs.readFileSync("./data/name.json", "utf-8");
  res.send(temp);
});

app.get("/age", cors(), (req, res) => {
  console.log("sending age.json");
  const temp = fs.readFileSync("./data/age.json", "utf-8");
  res.send(temp);
});

app.listen("3000");
