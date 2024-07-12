const express = require("express");
const category = express.Router();
const prisma = require("../db/prisma-client");

category
  .get("/all", async (req, res) => {
    try {
      const categories = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          subCategories: true,
        },
      });

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
          subCategories: true,
        },
      });

      res.send(category);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

category
  .post("/new", async (req, res) => {
    try {
      const body = req.body;

      const existingCategory = await prisma.category.findUnique({
        where: { name: body.name },
      });

      if (existingCategory) {
        return res
          .status(400)
          .json({ error: "A category with this name already exists!" });
      }

      const newCategory = await prisma.category.create({
        data: body,
      });

      res.send(newCategory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .post("/:id/new-sub", async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const newSubCategory = await prisma.category.update({
        where: { id },
        data: {
          subCategories: {
            push: body,
          },
        },
      });

      res.send(newSubCategory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  })
  .post("/:categoryId/:subCategoryName/new-sub-sub", async (req, res) => {
    try {
      const { categoryId, subCategoryName } = req.params;
      const { subSubCategories: newSubSubCategories } = req.body;

      const category = await prisma.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        return res.status(400).json({ message: "Category not found" });
      }

      // Find the sub-category to update
      const updatedSubCategories = category.subCategories.map((subCategory) => {
        if (subCategory.name === subCategoryName) {
          return {
            ...subCategory,
            subSubCategories: [
              ...subCategory.subSubCategories,
              ...newSubSubCategories,
            ],
          };
        }
        return subCategory;
      });

      // Update the category with the updated sub-categories
      const updatedCategory = await prisma.category.update({
        where: { id: categoryId },
        data: {
          subCategories: updatedSubCategories,
        },
      });

      res.send(updatedCategory);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  });

category.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: body,
    });

    res.send(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

// category.delete("/delete/:id", as)

module.exports = category;
