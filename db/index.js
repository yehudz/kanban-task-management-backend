require('dotenv').config()
const { Client } = require('pg')

const connectionString = process.env.DATABASE_URL
const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect()

module.exports = {
  query: (text, params) => client.query(text, params),
}