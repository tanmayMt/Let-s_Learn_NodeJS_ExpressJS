const express = require("express");
const getRegister = require("../controllers/register.controller");
const Router = express.Router();

Router.get("/",getRegister);

module.exports = Router;