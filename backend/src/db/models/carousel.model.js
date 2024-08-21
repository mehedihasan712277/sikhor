import { Schema, model } from "mongoose";

const carouselSchema = new Schema({
  imgUrl: { type: String, required: true },
  alt: { type: String, required: true },
});

carouselSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

export const Carousel = model("Carousel", carouselSchema);
