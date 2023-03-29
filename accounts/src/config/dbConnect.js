const mongoose = require('mongoose');

const URL = process.env.MONGO_ACCOUNT_URL;

mongoose.connect(URL);

const db = mongoose.connection;

module.exports = db;