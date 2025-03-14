const baseRoutes = require("./base");
const authRoutes = require("./auth");
const { notFound } = require("../handlers/not-found");

module.exports = (app) => {
  app.use("/", baseRoutes);
  app.use("/auth", authRoutes);
  app.use("*", notFound); // Changed to use as middleware
};
