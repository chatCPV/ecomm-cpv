const mongoose = require('mongoose')
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, './.env') })

mongoose.connect('mongodb://admin:secret@127.0.0.1:27017/ecommcpv-transactions?authSource=admin')

const db = mongoose.connection

module.exports = db
