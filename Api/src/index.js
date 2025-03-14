const mongoose = require("mongoose");
require("dotenv/config");
require("./models/user");
require("./models/token");
const db = require("./utils/db");
const app = require("./app");

async function startServer() {
  try {
    await db.connect(process.env.MONGODB_URI);
    mongoose.Promise = global.Promise;

    app.set("port", process.env.PORT || 7777);
    const port = app.get("port");

    app.listen(port, () => {
      console.log(`
🚀 Server is running!
📡 PORT: ${port}
🌍 ENV: ${process.env.NODE_ENV}
      `);
    });
  } catch (error) {
    console.error("💥 Server Error:", error.message);
    process.exit(1);
  }
}

startServer().catch((err) => {
  console.error("💥 Startup Error:", err.message);
  process.exit(1);
});
