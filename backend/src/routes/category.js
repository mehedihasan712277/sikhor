const express = require("express");
const category = express.Router();
const prisma = require("../db/prisma-client");

category
  .get("/all", async (req, res) => {
    try {
      const categories = await prisma.category.findMany();

      res.send(categories);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const categoryId = req.params.id;

      const category = await prisma.category.findFirst({
        where: {
          id: categoryId,
        },
        select: {
          id: true,
          name: true,
          subCategories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      res.send(category);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

category.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const newCategory = await prisma.category.create({
      data: body,
    });

    res.send(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = category;
