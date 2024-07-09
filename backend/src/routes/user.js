const express = require("express");
const user = express.Router();
const prisma = require("../db/prisma-client");

user.post("/new", async (req, res) => {
  try {
    const body = req.body;

    const { email } = body;

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      // If user already exists, throw an error
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const newUser = await prisma.user.create({
      data: body,
    });

    res.send(newUser.id);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

user.get("/all", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

user.delete("/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.send({ id: deletedUser.id });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = user;
