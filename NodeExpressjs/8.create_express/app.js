const express = require("express");
const app = express();
const userRouter = require("./routes/users.route")
const adminRouter = require("./routes/admin.route");

app.use("/api/user",userRouter);
// app.use("/api/admin",adminRouter);

app.get("/",(req,res)=>{
  //res.send("<h1>This is get request at Home route</h1>");
  res.sendFile(__dirname+"/views/home.html")
});

app.use((req, res) => { //For Unknown url which is not mention
  res.send("<h1>404 !!! Not a valid url</h1>");
});

module.exports = app;