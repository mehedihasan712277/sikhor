const express = require("express");
const product = express.Router();
const prisma = require("../db/prisma-client");

product
  .get("/all", async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        orderBy: {
          launchedAt: "desc",
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
      });

      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .get("/category/:categoryName", async (req, res) => {
    try {
      const { categoryName } = req.params;

      const products = await prisma.product.findMany({
        where: {
          category: {
            has: categoryName,
          },
        },
        orderBy: {
          launchedAt: "desc",
        },
      });

      res.send(products);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

product
  .post("/new", async (req, res) => {
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
  })
  .post("/new/many", async (req, res) => {
    try {
      const body = req.body;

      const newProducts = await prisma.product.createMany({
        data: body,
      });

      res.send(newProducts);
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
