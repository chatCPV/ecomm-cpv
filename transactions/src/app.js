const express = require('express')
const swaggerUi = require('swagger-ui-express')

const db = require('./config/dbconnect')
const routes = require('./routes/index')
const swaggerDocument = require('../swagger/transaction.json')

db.on('error', console.log.bind(console, 'Connection has failed!'))
db.once('open', () => {
  console.log('Database connection successful')
})

const app = express()
app.use(express.json())
app.use('/transactions/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes(app)

module.exports = app
