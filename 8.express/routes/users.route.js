const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  // res.status(200).json({
  //   "name": "Tanmay Roy",
  //   "email": "tanmoy435@gmail.com",
  //   "messege": "register page",
  //   statusCode : 200
  // });
  // res.redirect("/api/user/login");
  res.statusCode = 200;
  console.log(__dirname);
  //res.sendFile(__dirname+"/views/register.html");
  res.sendFile("G:\\4.Web Development\\Node\\8.express\\views\\register.html");
});

router.get("/login", (req, res) => {
  //res.send("<h1>I am a get request at login route</h1>");
  res.sendFile("G:\\4.Web Development\\Node\\8.express\\views\\login.html");
  res.cookie("name", "rabeya");
  res.cookie("age", "30");
  //res.clearCookie("name");
  res.append("id", "9303400");
  res.end();
});


module.exports = router;