const express = require('express');
const port = process.env.PORT || 3001
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)

app.listen(port, ()=> {
  console.log(`App listenning on port ${port}`)
})