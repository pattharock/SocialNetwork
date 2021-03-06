const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};

app.post("/posts/create", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  await axios
    .post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    })
    .catch((err) => console.log(err));

  res.status(201).send(posts[id]); // 201 resource successfully added.
});

app.post("/events", (req, res) => {
  console.log("Received Event");
  console.log(req.body);
  res.send({});
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
