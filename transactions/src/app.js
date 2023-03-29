const express = require('express')
const swaggerUi = require('swagger-ui-express')

const db = require('./config/dbconnect')
const routes = require('./routes/index')
const swaggerDocument = require('../swagger/transaction.json')

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão feita com sucesso')
})

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

routes(app)

module.exports = app
