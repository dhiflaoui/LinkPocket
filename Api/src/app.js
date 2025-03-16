const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./routes");

const app = express();

// Middleware setup
// Debug incoming requests
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  console.log("Raw headers:", req.headers);
  next();
});

// Setup body parsers FIRST
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Link-Pocket"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  const hasValidOrigin = req.headers.origin === process.env.UI_URL;
  const hasValidHeader = req.headers["x-link-pocket"] === "true";

  if (!hasValidOrigin && !hasValidHeader) {
    console.log("Origin validation failed:", {
      receivedOrigin: req.headers.origin,
      expectedOrigin: process.env.UI_URL,
      hasHeader: !!req.headers["x-link-pocket"],
      headerValue: req.headers["x-link-pocket"],
    });
    return res.status(403).json({ error: "Bad Request" });
  }

  next();
});

app.use(helmet());
app.use(morgan("dev"));

// Use the routes
routes(app);

module.exports = app;
