require("dotenv").config(); //loads environment variables from a .env 
                            // file into process.env to manage configuration securely.
const express = require("express");
const app = express();
//sets the server's port to the value specified in the environment variable PORT, or defaults to 3000 if PORT is not defined.
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("<h2>This is Home Page</h2>");
    res.end();
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})