const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", async (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const postId = req.params.id;

  let comments = commentsByPostId[postId] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[postId] = comments;

  await axios.post("http://localhostt:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId,
    },
  });

  res.status(201).send(comments); // new resource created
});

app.post("/events", (req, res) => {
  console.log("Received Event");
  console.log(req.body.type);
  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
