const { monthIncome, card, _id: clientId } = require('../helpers/mockUser.json')
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

    if (
      cardHolder !== card.cardHolder
      || cardNumber !== card.cardNumber
      || cardExp !== card.cardExp
      || cardCvv !== card.cardCvv
    ) {
      const transactionRejected = { ...transaction, status: 'Rejeitada' }
      const newTransactionRejected = await Transactions.create(transactionRejected)

      return res.status(201).json(newTransactionRejected)
    }

    if (transactionValue >= (monthIncome / 2)) {
      const transactionUnderReview = { ...transaction, status: 'Em análise' }
      const newTransactionUnderReview = await Transactions.create(transactionUnderReview)

      return res.status(201).json(newTransactionUnderReview)
    }

    const approvedTransaction = { ...transaction, status: 'Aprovada' }
    const newApprovedTransaction = await Transactions.create(approvedTransaction)

    return res.status(201).json(newApprovedTransaction)
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

async function getTransactionById(req, res) {
  try {
    const { id } = req.params
    const transactionInfo = await Transactions.findById(id)
    if (!transactionInfo) {
      throw new Error('Transação não encontrada')
    }

    const { _id: transactionId, status } = transactionInfo

    const transaction = {
      transactionId,
      clientId,
      status,
    }

    return res.status(200).json(transaction)
  } catch (error) {
    if (error.message === 'Transação não encontrada') {
      return res.status(400).json(error.message)
    }

    if (error.message === 'Transação não encontrada') {
      return res.status(400).json(error.message)
    }

    return res.status(500).json(error.message)
  }
}

module.exports = {
  createTransaction,
  getTransactionById,
}
