const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./routes/user");
const categoryRouter = require("./routes/category");
const subCategoryRouter = require("./routes/sub-category");
const subSubCategoryRouter = require("./routes/sub-sub-category");
const productRouter = require("./routes/product");

app.use(express.json());

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/subsubcategory", subSubCategoryRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("Sikhor server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
