const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
})
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const area1 = Math.PI*radius*radius;
    res.send(`<h2>Area of Circle: ${area1}</h2>`)
})
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html");
})
app.post("/triangle",(req,res)=>{
    const base = req.body.base;
    const hight = req.body.hight;
    const area2 = 0.5*base*hight;
    res.send(`<h2>Area of Triangle: ${area2}</h2>`)
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});