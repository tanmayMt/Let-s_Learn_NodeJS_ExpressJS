const express = require("express");
const app = express();
const PORT = 3001;

const myMiddleWare = (req, res, next) => {
  req.curTime= new Date(Date.now());
  next();
};

app.get("/",myMiddleWare,(req, res) => {
  // console.log("I am home. ");
  res.send(`<div>
              <h1>I am home route</h1>
              <h4>Date & Time: ${req.curTime}</h4>
            </div>`);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});