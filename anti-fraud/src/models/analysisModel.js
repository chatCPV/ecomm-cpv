const mongoose = require('mongoose')
const statuses = require('../helpers/statuses')

const analysesSchema = new mongoose.Schema({
  id: { type: String },
  clientId: { type: mongoose.ObjectId, required: true },
  transactionId: { type: mongoose.ObjectId, required: true },
  status: { type: String, default: statuses.ANALYSIS },
})

const analyses = mongoose.model('analyses', analysesSchema)

module.exports = analyses
