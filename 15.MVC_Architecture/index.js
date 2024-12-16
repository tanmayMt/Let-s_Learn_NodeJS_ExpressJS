const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); //used to parse incoming requests with URL-encoded payloads

const users =[
  {
    name: "Tanmay Roy",
    age: 23
  },
  {
    name: "Arohi Sen",
    age: 27
  }
];

const htmlForm = `
    <form method="POST" action="/users">
      <input type="text" name="name" placeholder="Enter Name" /><br>
      <input type="number" name="age" placeholder="Enter age" /><br>
      <button type="submit">save user</button>
    </form>
`

app.get("/users",(req,res)=>{
  res.send(htmlForm);
})

app.post("/users",(req,res)=>{
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age
  }
  users.push(user);
  
  res.status(201).json({
    success:true,
    users
  })
})

app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
    statusCode: res.statusCode
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
