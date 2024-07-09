const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./routes/user");

app.use(express.json());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Sikhor server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
