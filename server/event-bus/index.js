const express = require("express");
const bodyParser = require("body-parser");
const axios = rerquire("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events").catch((err) => {
    console.log("Error in reaching post service");
    console.log(err);
  });

  axios.post("http://localhost:4001/events").catch((err) => {
    console.log("Error in reaching comment service");
    console.log(err);
  });

  axios.post("http://localhost:4002/events").catch((err) => {
    console.log("Error in reaching query service");
    console.log(err);
  });

  app.listen(4005, () => {
    console.log("Listening on 4005");
  });
});
