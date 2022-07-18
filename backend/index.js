require("dotenv").config();
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = process.env.PORT;
app.use(express.static("public"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/", cors(), (req, res) => {
  console.log("sending description.json");
  const temp = fs.readFileSync("./models/description.json", "utf-8");
  res.send(temp);
});

app.get("/profile", cors(), (req, res) => {
  console.log("sending profile.json");
  const temp = fs.readFileSync("./models/profile.json", "utf-8");
  res.send(temp);
});

app.get("/major", cors(), (req, res) => {
  console.log("sending major.json");
  const temp = fs.readFileSync("./models/major.json", "utf-8");
  res.send(temp);
});

app.get("/name", cors(), (req, res) => {
  console.log("sending name.json");
  const temp = fs.readFileSync("./models/name.json", "utf-8");
  res.send(temp);
});

app.get("/age", cors(), (req, res) => {
  console.log("sending age.json");
  const temp = fs.readFileSync("./models/age.json", "utf-8");
  res.send(temp);
});

app.listen(PORT);
console.log(`My app is running on ${PORT}`);
