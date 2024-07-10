const express = require("express");
const product = express.Router();
const prisma = require("../db/prisma-client");

product
  .get("/all", async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          category: true,
          subCategory: {
            select: {
              id: true,
              name: true,
              category: true,
            },
          },
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
          regularPrice: true,
          discount: true,
          reducedPrice: true,
          description: true,
          launchedAt: true,
          imageUrls: true,
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
          category: true,
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

    // if (!body.subSubCategoryId) {
    //   return res.status(400).json({ error: "Sub-subcategoryId is missing!" });
    // }

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
