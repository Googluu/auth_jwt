const express = require("express");
const mongoose = require("mongoose");

const { config } = require("./config");

const app = express();

mongoose
  .connect(config.Url)
  .then(() => {
    app.listen(5000);
    console.log("Database is connected! listening to localhost 5000");
  })
  .catch((err) => console.log(err));
