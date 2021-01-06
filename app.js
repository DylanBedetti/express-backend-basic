const express = require('express')
const app = express()
require('dotenv').config()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/hi', (req, res) => {
  res.send("helllllo");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})