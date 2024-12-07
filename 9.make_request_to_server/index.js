const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  //const id = req.query.id;              //http://localhost:3001/?id=101
  //const name = req.query.name;         //http://localhost:3001/?id=101&name=Tanmay 
  const {id,name} =req.query;          //http://localhost:3001/?id=101&name=Tanmay 

  res.send(`Student id is : ${id}    &   Student Name is : ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});