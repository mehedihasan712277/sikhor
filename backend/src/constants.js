export const port = 8002;

import { fileURLToPath } from "url";
import path from "path";

export const publicPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public"
);
