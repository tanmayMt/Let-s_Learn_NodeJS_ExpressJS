const express = require("express");
const app = express();
const PORT = 3002;

//images, css style -> To work with this static, we need use static middleware
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/homePage.html");
    //res.end();
})


app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
})