const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

mongoose.connect(process.env.MONGO_DATABASE)

const db = mongoose.connection

module.exports = db
