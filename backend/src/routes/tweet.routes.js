import { Router } from "express";

const router = Router();

import {
  createTweet,
  getTweets,
  getTweetById,
  deleteTweetById,
  testTweet,
} from "../controllers/tweet.controllers.js";

import { upload } from "../middlewares/multer.middleware.js";

router.route("/").get(getTweets);

router.route("/test").get(testTweet);

router.route("/new").post(upload.single("image"), createTweet);

router.route("/delete/:id").delete(deleteTweetById);

router.route("/:id").get(getTweetById);

export default router;
