import { Category } from "../db/models/category.model.js";

import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";

import { isValidString } from "../utils/validator.js";

export const createCategory = asyncHandler(async (req, res) => {
  const { name, subCategories } = req.body;

  if (!isValidString(name)) {
    throw new ApiError(400, "name is required");
  }
});
