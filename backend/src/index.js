import app from "./app.js";
import { port } from "./constants.js";
import connectDB from "./db/index.js";

import { config } from "dotenv";

config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Sikhor server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
  });
