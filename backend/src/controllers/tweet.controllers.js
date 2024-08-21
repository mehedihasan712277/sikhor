import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { isValidString } from "../utils/validator.js";

import { Tweet } from "../db/models/tweet.model.js";

import { deleteImage } from "../utils/delete-image.js";
import { publicPath } from "../constants.js";

export const createTweet = asyncHandler(async (req, res) => {
  const { content, alt } = req.body;

  const imageFile = req.file;

  console.log(imageFile);

  if (!imageFile) {
    throw new ApiError("image is required", 400);
  }

  const imgUrl = `${req.protocol}://${req.get("host")}/tweet-images/${
    req.file.filename
  }`;

  if (!isValidString(content)) {
    throw new ApiError("content is required", 400);
  }

  if (!isValidString(alt)) {
    throw new ApiError("alt is required", 400);
  }

  const newTweet = await Tweet.create({ content, imgUrl, alt });

  res.send(newTweet);
});

export const getTweets = asyncHandler(async (_, res) => {
  const tweets = await Tweet.find();
  res.send(tweets);
});

export const getTweetById = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  res.send(tweet);
});

export const deleteTweetById = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (!tweet) {
    throw new ApiError(404, "Tweet not found");
  }

  // Delete the image file associated with the tweet
  deleteImage("tweet-images", tweet.imgUrl);

  // Delete the tweet
  await Tweet.findByIdAndDelete(req.params.id);

  res.send({ message: "Tweet successfully deleted" });
});

export const testTweet = asyncHandler(async (req, res) => {
  console.log(publicPath);
  res.send("test tweet");
});
