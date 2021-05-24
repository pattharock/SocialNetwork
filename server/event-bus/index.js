const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(express.json());
const events = [];
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);

  axios.post("http://posts-clusterip--srv:4000/events", event).catch((err) => {
    console.log("Error in reaching post service");
    console.log(err);
  });

  axios.post("http://comments-srv:4001/events", event).catch((err) => {
    console.log("Error in reaching comment service");
    console.log(err);
  });

  axios.post("http://query-srv:4002/events", event).catch((err) => {
    console.log("Error in reaching query service");
    console.log(err);
  });

  axios.post("http://moderation-srv:4003/events", event).catch((err) => {
    console.log("Error in reaching moderation service");
    console.log(err);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});
app.listen(4005, () => {
  console.log("Listening on 4005");
});
