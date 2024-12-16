const express = require("express");
const app = express();
const PORT = 3001;

const myMiddleWare = (req, res, next) => {
  console.log("Middleware function");
  next();
};

app.get("/",myMiddleWare,(req, res) => {
  console.log("I am home. ");
  res.send("<h1>I am home route</h1>");
});

app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});