const user = require('../helpers/mockUser.js');
const Transactions = require('../models/Transaction.js');

function createTransaction(req, res) {
  try { 
    const transaction = req.body;
    const { tansactionValue, cardHolder, cardNumber, cardExp, cardCvv } = transaction;
    const { card } = user;

    if (cardHolder !== card.cardHolder || cardNumber !== card.cardNumber || cardExp !== card.cardExp || cardCvv !== card.cardCvv ) {
      const transactionRejected = { ...transaction, status: 'Rejected'}

      return res.status(200).json(transactionRejected)
    }
  } catch (error) { 
    return res.status(500).json(error.message); 
  }
};

module.exports = createTransaction;