const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("I am a get request at Home route");
})

app.post("/",(req,res)=>{
    res.send("I am a post request at Home route");
})

app.put("/",(req,res)=>{
    res.send("I am a put request at Home route");
})

app.delete("/",(req,res)=>{
    res.send("I am a delete request at Home route");
})

module.exports = app;