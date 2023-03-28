const express = require('express')
const routes = require('./src/routes/index')
const db = require('./src/config/dbConnect')

const PORT = process.env.PORT || 8002

require('dotenv').config()

db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log('Connetciont successfull')
})

const app = express()

routes(app)

app.listen(PORT)

module.exports = app
