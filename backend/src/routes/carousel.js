const express = require("express");
const carousel = express.Router();
const prisma = require("../db/prisma-client");

carousel.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const newImgUrl = await prisma.carousel.create({
      data: body,
    });

    res.send(newImgUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.get("/", async (req, res) => {
  try {
    const imgUrls = await prisma.carousel.findMany();

    res.send(imgUrls);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedImgUrl = await prisma.carousel.update({
      where: { id },
      data: body,
    });

    res.send(updatedImgUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedImgUrl = await prisma.carousel.delete({
      where: { id },
    });

    res.send(deletedImgUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

module.exports = carousel;
