import { ApiError } from "../utils/api-error.js";

// Middleware to validate data with a Zod schema
export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next(); // Continue to the next middleware if validation is successful
  } catch (e) {
    if (e instanceof Error && e.name === "ZodError") {
      // ZodError provides an array of issues. You can customize what to send back from here.
      const errors = e.errors.map((err) => ({
        path: err.path.join("."),
        message: err.message,
      }));

      // Throw ApiError with 400 status code and the validation errors
      next(new ApiError(400, "Invalid request data", errors));
    } else {
      // Forward any other errors that may have occurred
      next(e);
    }
  }
};
