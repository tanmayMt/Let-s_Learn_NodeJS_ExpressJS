const express = require("express");
const userRouter = require("./routes/users.route")

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true })); //used to parse incoming requests with URL-encoded payloads
app.use(userRouter);


app.use((req, res, next) => {
  res.status(404).json({
    message: "resource not found",
    statusCode: res.statusCode
  });
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
