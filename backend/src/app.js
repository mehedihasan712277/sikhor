import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// route imports

import carouselRouter from "./routes/carousel.routes.js";
import categoryRouter from "./routes/category.routes.js";
import productRouter from "./routes/product.routes.js";
import tweetRouter from "./routes/tweet.routes.js";

app.use("/carousel", carouselRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/tweet", tweetRouter);

export default app;
