const express = require("express");
const registerRoute = require("./routes/register.route");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).sendFile(__dirname+"/views/home.html");
})

app.use("/register",registerRoute);
// app.get("/register",(req,res)=>{
//     res.status(200).sendFile(__dirname+"/views/registerForm.html");
// })

module.exports=app;