const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  tansactionValue: {type: Number, required: true},
  cardHolder: {type: String, required: true},
  cardNumber: {type: String, required: true},
  cardExp: {type: String, required: true},
  cardCvv: {type: String, required: true},

});

const Transactions = mongoose.model('transactions', transactionSchema);

module.exports = Transactions;
