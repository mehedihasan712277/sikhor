import { Router } from "express";
import { createMany } from "../controllers/product.controllers.js";

const router = Router();

router.route("/new/many").post(createMany);

export default router;
