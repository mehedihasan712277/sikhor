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
        select: {
          id: true,
          name: true,
          categoryId: true,
          subSubCategories: {
            select: {
              id: true,
              name: true,
            },
          },
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

    if (!body.categoryId) {
      return res.status(400).json({ error: "categoryId is missing!" });
    }

    const existingSubcategory = await prisma.subCategory.findUnique({
      where: { name: body.name },
    });

    if (existingSubcategory) {
      return res
        .status(400)
        .json({ error: "Sub-category with this name already exits!" });
    }

    const newSubCategory = await prisma.subCategory.create({
      data: body,
    });

    return res.send(newSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

subCategory.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedSubCategory = await prisma.subCategory.update({
      where: { id },
      data: body,
    });

    res.send(updatedSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

// subCategory.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedSubCategory = await prisma.subCategory.delete({
//       where: { id },
//     });

//     res.send(deletedSubCategory);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Internal server error");
//   }
// });

module.exports = subCategory;
