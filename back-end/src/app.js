require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
