// cors package- Cross-Origin Resource Sharing allow you to make request from one website to another website in the browser, which is normaly prohibited by another browser policy called 
// the Same-Origin Policy(SOP).

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const userRouter = require("./routes/user.route");
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use(userRouter);

app.use((req,res)=>{
    res.status(404).json({
        messege: "Bad Request",
        code: 404
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})