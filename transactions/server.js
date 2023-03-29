const app = require('./src/app')
require('dotenv').config()

const PORT = process.env.PORT || 8003;

app.listen(PORT, () => {
  console.log(`Servidor escutando em http://localhost:${PORT}`)
})
