const express = require('express');
const app = express()
const port = process.env.PORT || 3001
const db = require('./db')
// Create new board
app.use(express.json())
app.post('/api/v2/boards', async (req, res)=> {
  console.log(req.body)
})

// Get all boards
app.get('/api/v2/boards', async (req, res)=> {
  res.status(200).json({
    status: "success",
    data: {
      board: {name: "First board"}
    }
  })
})

// Get one board
app.get('/api/v2/boards/:id', async (req, res)=> {
  const { id } = req.params;
  console.log(id)
})

// Update board
app.use(express.json())
app.put('/api/v2/boards/:id', async (req, res)=> {
  const { id } = req.params;
  console.log(req.body)
  console.log(id)
})

// Delete board
app.delete('/api/v2/boards/:id', async(req, res)=> {
  const { id } = req.params;
  console.log(id)
})

app.listen(port, ()=> {
  console.log(`App listenning on port ${port}`)
})