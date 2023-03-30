const { Router } = require('express')
const {
  createTransaction,
  getTransactionById,
  updateTransactionByIdApproved,
  updateTransactionByIdRejected,
} = require('../controllers/transactionsController')

const transactionsRouter = Router()

transactionsRouter
  .get('/transactions/:id', getTransactionById)
  .post('/transactions', createTransaction)
  .patch('/transactions/approve/:id', updateTransactionByIdApproved)
  .patch('/transactions/reject/:id', updateTransactionByIdRejected)

module.exports = transactionsRouter
