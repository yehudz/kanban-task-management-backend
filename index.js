require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3001

const { Client } = require('pg')
const client = new Client({
  user: process.env.USER,
  host: 'ec2-44-207-126-176.compute-1.amazonaws.com',
  database: 'deibatppg99v10',
  password: process.env.PASSWORD,
  port: process.env.PORT,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res.rows[0])
  client.end()
})

app.get('/getBoards', (req, res)=> {
  res.send('Hello world')
})

app.listen(port, ()=> {
  console.log(`App listenning on port ${port}`)
})