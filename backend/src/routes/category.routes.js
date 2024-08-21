import { Router } from "express";

const router = Router();

import { createMany } from "../controllers/category.controllers.js";

router.route("/new/many").post(createMany);

export default router;
