const express = require("express");
const { body, validationResult } = require("express-validator");

const { registerUser, loginUser } = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.post(
  "/register",
  body("name").trim().notEmpty(),
  (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({error:errors.array()});
    }
    next();
  },
  registerUser
);

userRoutes.post("/login", loginUser);

module.exports = userRoutes;