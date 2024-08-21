import { Product } from "../db/models/product.model.js";

import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";

export const createMany = asyncHandler(async (req, res) => {
  const body = req.body;
  const result = await Product.create(body);
  res.send(result);
});
