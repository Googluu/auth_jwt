const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./routes/user.routes");
const boomErrorHandler = require("./middlewares/errorHandler");
const { config } = require("./config");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

//middleware
app.use(boomErrorHandler);

mongoose
  .connect(config.Url)
  .then(() => {
    app.listen(5000);
    console.log("Database is connected! listening to localhost 5000");
  })
  .catch((err) => console.log(err));
