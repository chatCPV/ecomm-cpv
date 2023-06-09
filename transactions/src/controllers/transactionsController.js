const { monthIncome, card, _id: clientId } = require('../helpers/mockUser.json')
const Transactions = require('../models/Transaction')

async function createTransaction(req, res) {
  try {
    const transaction = req.body
    if (!transaction) {
      throw new Error('Invalid request')
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
      const transactionRejected = { ...transaction, status: 'rejected' }
      const newTransaction = await Transactions.create(transactionRejected)
      const { _id: transactionId, status } = newTransaction
      const newTransactionRejected = {
        transactionId,
        status,
      }

      return res.status(201).json(newTransactionRejected)
    }

    if (transactionValue >= (monthIncome / 2)) {
      const transactionUnderReview = { ...transaction, status: 'underAnalysis' }
      const newTransaction = await Transactions.create(transactionUnderReview)
      const { _id: transactionId, status } = newTransaction
      const newTransactionUnderReview = {
        transactionId,
        status,
      }

      return res
        .status(303)
        .header({ Location: `/transactions/${newTransactionUnderReview.transactionId}` })
        .json(newTransactionUnderReview)
    }

    const approvedTransaction = { ...transaction, status: 'approved' }
    const newTransaction = await Transactions.create(approvedTransaction)
    const { _id: transactionId, status } = newTransaction
    const newApprovedTransaction = {
      transactionId,
      status,
    }

    return res.status(201).json(newApprovedTransaction)
  } catch (error) {
    if (error.message === 'Invalid request') {
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
      throw new Error('Transaction not found')
    }

    const { _id: transactionId, status } = transactionInfo

    const transaction = {
      transactionId,
      clientId,
      status,
    }

    return res.status(200).json(transaction)
  } catch (error) {
    if (error.message === 'Transaction not found') {
      return res.status(404).json(error.message)
    }

    return res.status(500).json(error.message)
  }
}

async function updateTransactionByIdApproved(req, res) {
  const { id } = req.params
  const transaction = await Transactions.findById(id)
  if (transaction.status === 'underAnalysis') {
    await Transactions.findByIdAndUpdate(id, { $set: { status: 'approved' } })
    return res.status(200).send({ message: 'Transaction Approved' })
  }
  return res.status(409).send({ message: `Status can not be changed: ${transaction.status}` })
}

async function updateTransactionByIdRejected(req, res) {
  const { id } = req.params
  const transaction = await Transactions.findById(id)
  if (transaction.status === 'underAnalysis') {
    await Transactions.findByIdAndUpdate(id, { $set: { status: 'rejected' } })
    return res.status(200).send({ message: 'Transaction Rejected' })
  }
  return res.status(409).send({ message: `Status can not be changed: ${transaction.status}` })
}

module.exports = {
  createTransaction,
  getTransactionById,
  updateTransactionByIdApproved,
  updateTransactionByIdRejected,
}
