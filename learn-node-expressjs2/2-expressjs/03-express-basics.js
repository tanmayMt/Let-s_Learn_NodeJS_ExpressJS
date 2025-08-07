const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.use('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
