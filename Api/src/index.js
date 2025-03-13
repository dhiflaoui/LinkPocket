const mongoose = require("mongoose");
require("dotenv/config");
require("../models/user");
require("../models/token");
const db = require("./utils/db");
const app = require("./app");

async function startServer() {
  try {
    await db.connect(process.env.MONGO_URI);

    mongoose.Promise = global.Promise;
    app.set("port", process.env.PORT || 7777);
    const port = app.get("port");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("error", error);
  }
}
startServer().catch((err) => {
  console.log("error when startServer", err);
});
