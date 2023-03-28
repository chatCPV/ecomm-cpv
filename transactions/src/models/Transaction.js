const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  transactionValue: {type: Number, required: true},
  cardHolder: {type: String, required: true},
  cardNumber: {type: String, required: true},
  cardExp: {type: String, required: true},
  cardCvv: {type: String, required: true},
  status: {type: String},

});

const Transactions = mongoose.model('transactions', transactionSchema);

module.exports = Transactions;
