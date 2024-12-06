const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  // res.status(200).json({
  //   "name": "Tanmay Roy",
  //   "email": "tanmoy435@gmail.com",
  //   "messege": "register page",
  //   statusCode : 200
  // });
  res.redirect("/api/user/login");
  // res.statusCode = 200;
  // res.sendFile(__dirname+"/views/register.html");
});

router.get("/login", (req, res) => {
  res.send("<h1>I am a get request at login route</h1>");
});


module.exports = router;