const express = require('express')
const swaggerUi = require('swagger-ui-express')
const routes = require('./routes/index')
const swaggerDocument = require('../swagger/account.json')

const app = express()

app.use(express.json())

routes(app)

app.use('/accounts-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
