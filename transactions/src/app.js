const express = require('express')

const db = require('./config/dbconnect')
const routes = require('./routes/index')

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão feita com sucesso')
})

const app = express()
app.use(express.json())

routes(app)

module.exports = app
