const express = require('express')
const swaggerUi = require('swagger-ui-express')
const routes = require('./src/routes/index')
const db = require('./src/config/dbConnect')
const swaggerDocument = require('./src/swagger/antiFraud.json')

const PORT = process.env.PORT || 8002

require('dotenv').config()

db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log('Connection successful')
})

const app = express()

routes(app)

app.use('/antifraud-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT)

module.exports = app
