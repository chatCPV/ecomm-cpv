require('dotenv').config()
const db = require('./src/config/dbConnect')
const app = require('./src/app')

const PORT = process.env.PORT || 8001

db.on('error', console.log.bind(console, 'Connection has failed!'))
db.once('open', () => {
  console.log('Database connection successful')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
