const express = require("express");

const { registerUser, loginUser } = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.post(
  "/register",
  registerUser
);

userRoutes.post("/login", loginUser);

module.exports = userRoutes;