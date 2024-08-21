import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Sikhor backend server from docker");
});

export { app };
