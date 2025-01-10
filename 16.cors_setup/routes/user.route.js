const express = require("express");
const getUser = require("../controllers/user.controller");
const createUser = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/",getUser);
userRouter.get("/",createUser);

module.exports = userRouter;