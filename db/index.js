require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
  user: process.env.DBUSER,
  host: 'ec2-44-207-126-176.compute-1.amazonaws.com',
  database: 'deibatppg99v10',
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect()

module.exports = {
  query: (text, params) => client.query(text, params),
}