const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("I am a get request at Home route");
})

module.exports = app;