import mongoose from "mongoose";
import bcrypt from "bcrypt";

import config from "../config/config.js";

import User from "../models/user.model.js";
import Permission from "../models/permission.model.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const UsersData = require("./users.data.json");
const PermissionsData = require("./permissions.data.json");

const seedData = async () => {
  mongoose.connect(config.mongoUri);
  console.log("Seeding data...");

  async function dropDatabase() {
    console.log("Removing User collection");
    await User.deleteMany();
    console.log("Removing Permission collection");
    await Permission.deleteMany();
    console.log("Success!");
  }
  dropDatabase();

  for (let i = 0; i < UsersData.length; i++) {
    const newUser = new User(UsersData[i]);
    let hashedPassword = await bcrypt.hash(UsersData[i].password, 12);
    newUser.password = hashedPassword;
    await newUser.save();
  }

  for (let i = 0; i < PermissionsData.length; i++) {
    const newPermission = new Permission(PermissionsData[i]);
    await newPermission.save();
  }

  console.log("Data seeding is done!");

  process.exit();
};

seedData();
