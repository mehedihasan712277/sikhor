const express = require("express");
const subCategory = express.Router();
const prisma = require("../db/prisma-client");

subCategory
  .get("/all", async (req, res) => {
    try {
      const subCategories = await prisma.subCategory.findMany();

      res.send(subCategories);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const subCategory = await prisma.subCategory.findFirst({
        where: {
          id,
        },
        include: {
          subSubCategories: true,
        },
      });

      res.send(subCategory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

subCategory.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const newSubCategory = await prisma.subCategory.create({
      data: body,
    });

    res.send(newSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

subCategory.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubCategory = await prisma.subCategory.delete({
      where: { id },
    });

    res.send(deletedSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = subCategory;
