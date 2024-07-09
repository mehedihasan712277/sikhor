const express = require("express");
const subSubCategory = express.Router();
const prisma = require("../db/prisma-client");

subSubCategory
  .get("/all", async (req, res) => {
    try {
      const subSubCategories = await prisma.subSubCategory.findMany();

      res.send(subSubCategories);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const subSubCategory = await prisma.subSubCategory.findFirst({
        where: {
          id,
        },
        include: {
          products: true,
        },
      });

      res.send(subSubCategory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

subSubCategory.post("/new", async (req, res) => {
  try {
    const body = req.body;

    if (!body.subCategoryId) {
      return res.status(400).json({ error: "SubcategoryId is missing!" });
    }

    const existingSubSubcategory = await prisma.subSubCategory.findUnique({
      where: { name: body.name },
    });

    if (existingSubSubcategory) {
      return res
        .status(400)
        .json({ error: "Sub-subcategory with this name already exits!" });
    }

    const newSubSubCategory = await prisma.subSubCategory.create({
      data: body,
    });

    res.send(newSubSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

subSubCategory.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubSubCategory = await prisma.subSubCategory.delete({
      where: { id },
    });

    res.send(deletedSubSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

subSubCategory.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedSubSubCategory = await prisma.subSubCategory.update({
      where: { id },
      data: body,
    });

    res.send(updatedSubSubCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = subSubCategory;
