import dotenv from "dotenv";
dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongoUri:
    process.env.MONGO_URI ||
    "mongodb://localhost:27017/software-developer-task-Narda",
};

export default config;
