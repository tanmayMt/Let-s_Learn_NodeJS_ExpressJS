const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>I am a get request at Home route</h1>");
})

app.get("/register", (req, res) => {
  res.send("<h1>I am a get request at register route</h1>")
});
app.get("/login", (req, res) => {
  res.send("<h1>I am a get request at login route</h1>")
});

app.use((req, res) => { //For Unknown url which is not mention
  res.send("<h1>404 !!! Not a valid url</h1>");
});

module.exports = app;