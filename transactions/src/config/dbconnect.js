const mongoose = require('mongoose')
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })
const URL = process.env.MONGO_TRANSACTIONS_URL

mongoose.connect(URL)

const db = mongoose.connection

module.exports = db
