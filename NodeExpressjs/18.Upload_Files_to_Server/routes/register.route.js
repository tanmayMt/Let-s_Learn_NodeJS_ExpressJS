const express = require("express");
const {getRegister,postRegister} = require("../controllers/register.controller");
const Router = express.Router();

const multer  = require('multer')

//File Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  }
})
const upload = multer({ storage: storage });


Router.get("/",getRegister);
Router.post("/",upload.single("image"),postRegister);

module.exports = Router;