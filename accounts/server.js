require('dotenv').config()
const db = require('./src/config/dbConnect')
const app = require('./src/app')

const PORT = process.env.PORT || 8001

db.on('error', console.log.bind(console, 'Erro de conexão!'))
db.once('open', () => {
  console.log('Conexão com banco feita com sucesso!')
})

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`)
})
