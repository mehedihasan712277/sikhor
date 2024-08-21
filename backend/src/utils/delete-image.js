import fs from "fs";
import path from "path";

import { publicPath } from "../constants.js";

export const deleteImage = async (folderName, imgUrl) => {
  const filePath = path.join(publicPath, folderName, path.basename(imgUrl));

  console.log(filePath);

  fs.rm(filePath, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
