const mongoose = require('mongoose')

const URL = process.env.MONGO_DATABASE

mongoose.connect(URL)

const db = mongoose.connection

module.exports = db
