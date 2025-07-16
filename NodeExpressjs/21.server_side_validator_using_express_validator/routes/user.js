const express = require("express");
const { body, validationResult } = require("express-validator");

const { registerUser, loginUser } = require("../controllers/user");
const { userRegistrationValidator, userLoginValidator } = require("../validation/auth");
const { runValidation } = require("../validation");

const userRoutes = express.Router();

userRoutes.post(
  "/register",

  // //Validation
  // body("name").trim().notEmpty().withMessage("Name is missing").isLength({min:5,max:32}).withMessage('name must have at least 5 characters and maximum 32 characters'),
  // body("email").trim().notEmpty().withMessage('Email is missing').isEmail().withMessage('Not a valid email'),
  // body('password').trim().notEmpty().withMessage('Password is missing') .isLength({ min: 5 }).withMessage('password must have at least 5 characters'),
  // body('dob') .trim().notEmpty().withMessage('dob is missing').isISO8601().toDate().withMessage('Not a valid dob'),//2000-03-12   <- vaild Date Formate
  userRegistrationValidator,

  // (req,res,next)=>{
  //   const errors = validationResult(req);
  //   if(!errors.isEmpty()){
  //     return res.status(400).json({error:errors.array()});
  //   }
  //   next();
  // },
  runValidation,
  registerUser
);

userRoutes.post(
  "/login", 

  // //Validation
  // body("email").trim().notEmpty().withMessage('Email is missing').isEmail().withMessage('Not a valid email'),
  // body('password').trim().notEmpty().withMessage('Password is missing') .isLength({ min: 5 }).withMessage('password must have at least 5 characters'),
  userLoginValidator,

  //   (req,res,next)=>{
  //   const errors = validationResult(req);
  //   if(!errors.isEmpty()){
  //     return res.status(400).json({error:errors.array()});
  //   }
  //   next();
  // },
  runValidation,
  loginUser
);

module.exports = userRoutes;