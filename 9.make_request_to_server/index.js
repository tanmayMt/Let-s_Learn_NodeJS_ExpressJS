const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
//Request with Query Parameters
// app.get("/", (req, res) => {
//   //const id = req.query.id;              //http://localhost:3001/?id=101
//   //const name = req.query.name;         //http://localhost:3001/?id=101&name=Tanmay 
//   const {id,name} =req.query;          //http://localhost:3001/?id=101&name=Tanmay 
//   res.send(`Student id is : ${id}    &   Student Name is : ${name}`);
// });

//Request with Route Parameters
// app.get("/userId/:id/userAge/:age", (req, res) => {  //http://localhost:3001/userId/101/userAge/21
//   const id = req.params.id;
//   const age = req.params.age;
//   res.send(`Student id is : ${id}    &   Student age is : ${age}`);
// });

//Make Request with Header ( req.header("key") )
app.get("/",(req,res)=>{
  const id = req.header("id");
  const name = req.header("name");
  res.send(`Student id is : ${id}    &   Student name is : ${name}`);
})

//Make Request with JSON data in request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user",(req,res)=>{
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Student name is : ${name}    &   Student age is : ${age}`);
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});