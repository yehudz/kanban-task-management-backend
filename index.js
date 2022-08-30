const express = require('express');
const app = express()
const port = process.env.PORT || 3001

const { Client } = require('pg')
const client = new Client({
  user: 'mpixreqjeoodgr',
  host: 'ec2-44-207-126-176.compute-1.amazonaws.com',
  database: 'deibatppg99v10',
  password: 'a909d1f4e5606f0b410efefcb4a8af2e5260c933ce9e03e23bbbcca04d47ba69',
  port: 5432,
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