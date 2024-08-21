import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String },
  avater: {},
  password: { type: String, required: true },
  refreshToken: { type: String },
  cart: [],
});

export const User = model("User", userSchema);
