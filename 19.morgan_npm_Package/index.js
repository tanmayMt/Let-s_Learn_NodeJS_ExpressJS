const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/",(req,res)=>{
    res.status(200).send("<h1>This is Server Home Page</h1>")
})
app.get("/products",(req,res)=>{
    res.status(200).send("<h1>List of All Products</h1>")
})
app.post("/products",(req,res)=>{
    res.status(201).send("<h3>Product is created Successfully</h3>>")
})


const port = 4000;
app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`);
})