import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  regularPrice: { type: Number, required: true },
  discount: { type: Number },
  reducedPrice: { type: Number },
  launchedAt: { type: Date, required: true, default: Date.now() },
  rating: { type: Number, required: true },
  category: [{ type: String, required: true }],
});

export const Product = model("Product", productSchema);
