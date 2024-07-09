const express = require("express");
const product = express.Router();
const prisma = require("../db/prisma-client");

product
  .get("/all", async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        include: {
          category: true,
        },
      });

      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await prisma.product.findFirst({
        where: { id },
        select: {
          id: true,
          name: true,
          regularPrice: true,
          discount: true,
          reducedPrice: true,
          description: true,
          imageUrls: true,
          launchedAt: true,
          subSubCategory: {
            select: {
              id: true,
              name: true,
              subCategory: {
                select: {
                  id: true,
                  name: true,
                  category: true,
                },
              },
            },
          },
        },
      });

      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

product.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const newProduct = await prisma.product.create({
      data: body,
    });

    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

product.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await prisma.product.delete({
      where: { id },
    });

    res.send(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = product;
