const express = require("express");
const { randomBytes } = require("crypto");

const app = express();

const posts = {};

app.get("/post", (req, res) => {
  res.send(posts);
});

app.post("/post", (req, res) => {});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
