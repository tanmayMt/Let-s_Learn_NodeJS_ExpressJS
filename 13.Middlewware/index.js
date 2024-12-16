const express = require("express");
const app = express();
const PORT = 3001;

const myMiddleWare = (req, res, next) => {
  req.curTime= new Date(Date.now());
  next();
};

app.use(myMiddleWare); //Common Middleware in app for all routes

app.get("/",(req, res) => {
  // console.log("I am home. ");
  res.send(`<h1>I am home route</h1>
            <h4>Date & Time: ${req.curTime}</h4>`
          );
  res.end();
});

app.get("/about", (req, res) => {
  res.send(`<h1>I am about route</h1>
            <h4>Date & Time: ${req.curTime}</h4>
          `);
  res.end();
});

app.get("/user", (req, res) => {
  res.send(`<h1>I am user route</h1>
            <h4>Date & Time: ${req.curTime}</h4>
          `);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});