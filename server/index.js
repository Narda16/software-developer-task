import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import config from "./src/config/config.js";
import userRoutes from "./src/routes/user.routes.js";
import permissionRoutes from "./src/routes/permission.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use("/user", userRoutes);
app.use("/permission", permissionRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    app.listen(config.port);
    console.log(`Server running on port ${config.port}`);
  })
  .catch((err) => console.log(err));
