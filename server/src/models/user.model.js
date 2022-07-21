import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = mongoose.model(
  "User",
  new Schema(
    {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      status: { type: String, required: true, default: "Available" },
      isDeleted: { type: Boolean, required: true, default: false },
      permissions: [{ type: mongoose.Schema.ObjectId, ref: "Permission" }],
    },

    { timestamps: true }
  )
);

export default User;
