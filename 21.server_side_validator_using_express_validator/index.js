const express = require('express');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api', userRoutes);

app.get('/', (req, res) => { 
  res.send("<h1>This is Server Home Page</h1>");
});


const port = 4000;
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
