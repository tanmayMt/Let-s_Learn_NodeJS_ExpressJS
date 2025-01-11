const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const userRouter  = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//Routes
//Home Route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});
app.use("/users",userRouter);

//Route Not Found
app.use((req,res,next)=>{
    res.status(404).json({message:"Route Not Fount"});
})


//Server Error
app.use((err,req,res,next)=>{
    res.status(404).json({message:"Something Broke"});
})

module.exports = app;
