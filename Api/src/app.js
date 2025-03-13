const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Link-Pocket"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use((req, res, next) => {
  if (
    req.method !== "OPTIONS" &&
    !req.headers["origin"] &&
    !req.headers["Origin"] !== process.env.UI_URL &&
    !req.headers["X-Link-Pocket"]
  ) {
    return res.status(403).send("Bad Request");
  }
  next();
});
app.use(helmet());
app.use(morgan("dev"));

routes(app);
module.exports = app;
