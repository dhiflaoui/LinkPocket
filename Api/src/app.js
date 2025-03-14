const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./routes"); // Import the main routes file

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Link-Pocket"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Origin check middleware
app.use((req, res, next) => {
  if (
    req.method !== "OPTIONS" &&
    !req.headers.origin &&
    req.headers.origin !== process.env.UI_URL &&
    !req.headers["x-link-pocket"]
  ) {
    return res.status(403).json({ error: "Bad Request" });
  }
  next();
});

app.use(helmet());
app.use(morgan("dev"));

// Use the routes
routes(app); // This will apply all routes from the index.js router

module.exports = app;
