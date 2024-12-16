const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users",(req,res)=>{
  res.send("Hello Users");
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
