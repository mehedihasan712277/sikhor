import { Schema, model } from "mongoose";

const tweetSchema = new Schema({
  content: { type: String, required: true },
  imgUrl: { type: String, required: true },
  alt: { type: String, required: true },
  author: {},
});

export const Tweet = model("Tweet", tweetSchema);
