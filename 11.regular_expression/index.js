const express = require("express");
const app = express();
const HOST = 3000;

app.listen(HOST,()=>{
    console.log(`Server is running at http://localhost:${HOST}`);
})

// app.get("/product/:id([0-9])",(req,res)=>{ //Single digit is acceptable between 0-9
//app.get("/product/:id([0-9]+)",(req,res)=>{ //any no. of  digit id is acceptable
app.get("/product/:id([0-9]{3})",(req,res)=>{ //only 3 digit id is acceptable
    const id = req.params.id;
    res.send(`<h3>Product ID: ${id}</h3>`);
})

app.use((req,res)=>{
    res.status(404).send({
        message:"not a valid route",
    })
})