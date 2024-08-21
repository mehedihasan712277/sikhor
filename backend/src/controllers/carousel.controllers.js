import { Carousel } from "../db/models/carousel.model.js";

import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";

import { isValidString } from "../utils/validator.js";

export const addNewImage = asyncHandler(async (req, res) => {
  const { imgUrl, alt } = req.body;

  if (!isValidString(imgUrl)) {
    throw new ApiError("imgUrl is required", 400);
  }
  if (!isValidString(alt)) {
    throw new ApiError("alt is required", 400);
  }

  const newImgUrl = await Carousel.create({ imgUrl, alt });
  res.send(newImgUrl);
});

export const getCarousel = asyncHandler(async (req, res) => {
  const carousel = await Carousel.find();
  res.send(carousel);
});
