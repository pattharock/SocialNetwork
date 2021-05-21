const express = require("express");
const cors = requirr("express");

const app = express();
app.use(express.json());
app.use(cors());
