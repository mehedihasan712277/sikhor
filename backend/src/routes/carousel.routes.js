import { Router } from "express";

const router = Router();

import {
  addNewImage,
  getCarousel,
} from "../controllers/carousel.controllers.js";

router.route("/").get(getCarousel);

router.route("/new").post(addNewImage);

export default router;
