const express = require("express");
const carousel = express.Router();
const prisma = require("../db/prisma-client");

carousel.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const newCarousel = await prisma.carousel.create({
      data: body,
    });

    res.send(newCarousel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const carousel = await prisma.carousel.findFirst({
      where: { id },
    });

    res.send(carousel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedCarousel = await prisma.carousel.update({
      where: { id },
      data: body,
    });

    res.send(updatedCarousel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

carousel.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCarousel = await prisma.carousel.delete({
      where: { id },
    });

    res.send(deletedCarousel);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Internal server error!" });
  }
});

module.exports = carousel;
