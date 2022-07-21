import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Permission = mongoose.model(
  "Permission",
  new Schema(
    {
      code: { type: String, required: true },
      description: { type: String, required: true },
    },
    { timestamps: true }
  )
);

export default Permission;
