const user = require('../helpers/mockUser')
const Transactions = require('../models/Transaction')

async function createTransaction(req, res) {
  try {
    const transaction = req.body
    const {
      transactionValue,
      cardHolder,
      cardNumber,
      cardExp,
      cardCvv,
    } = transaction

    const { monthIncome, card } = user

    if (
      cardHolder !== card.cardHolder
      || cardNumber !== card.cardNumber
      || cardExp !== card.cardExp
      || cardCvv !== card.cardCvv
    ) {
      const transactionRejected = { ...transaction, status: 'Rejeitada' }
      const newTransactionRejected = await Transactions.create(transactionRejected)

      return res.status(200).json(newTransactionRejected)
    }

    if (transactionValue >= (monthIncome / 2)) {
      const transactionUnderReview = { ...transaction, status: 'Em análise' }
      const newTransactionUnderReview = await Transactions.create(transactionUnderReview)

      return res.status(200).json(newTransactionUnderReview)
    }

    const approvedTransaction = { ...transaction, status: 'Aprovada' }
    const newApprovedTransaction = await Transactions.create(approvedTransaction)

    return res.status(200).json(newApprovedTransaction)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = createTransaction
