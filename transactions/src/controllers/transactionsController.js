const { monthIncome, card, _id: clientId } = require('../helpers/mockUser.json')
const Transactions = require('../models/Transaction')

async function createTransaction(req, res) {
  try {
    const transaction = req.body
    if (!transaction) {
      throw new Error('Requisição inválida')
    }
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
      const newTransaction = await Transactions.create(transactionRejected)
      const { _id, status } = newTransaction
      const newTransactionRejected = {
        transactionId: _id,
        status,
      }

      return res.status(201).json(newTransactionRejected)
    }

    if (transactionValue >= (monthIncome / 2)) {
      const transactionUnderReview = { ...transaction, status: 'Em análise' }
      const newTransaction = await Transactions.create(transactionUnderReview)
      const { _id, status } = newTransaction
      const newTransactionUnderReview = {
        transactionId: _id,
        status,
      }

      return res
        .status(303)
        .header({ Location: `/payments/${newTransactionUnderReview.transactionId}` })
        .json(newTransactionUnderReview)
    }

    const approvedTransaction = { ...transaction, status: 'Aprovada' }
    const newTransaction = await Transactions.create(approvedTransaction)
    const { _id, status } = newTransaction
    const newApprovedTransaction = {
      transactionId: _id,
      status,
    }

    return res.status(201).json(newApprovedTransaction)
  } catch (error) {
    if (error.message === 'Requisição inválida') {
      return res.status(400).json(error.message)
    }

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
      return res.status(404).json(error.message)
    }

    return res.status(500).json(error.message)
  }
}

module.exports = {
  createTransaction,
  getTransactionById,
}
