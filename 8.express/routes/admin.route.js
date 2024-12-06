const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("<h1>I am a get request at admin-> register route</h1>");
});

router.get("/login", (req, res) => {
  res.send("<h1>I am a get request at admin-> login route</h1>");
});


module.exports = router;
