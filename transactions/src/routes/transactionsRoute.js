const { Router } = require('express')
const { createTransaction, getTransactionById,updateTransactionByIdApproved,updateTransactionByIdRejected } = require('../controllers/transactionsController')

const transactionsRouter = Router()

transactionsRouter
  .get('/transactions/:id', getTransactionById)
  .post('/transactions', createTransaction)
  .put('/transactions/:id/approve', updateTransactionByIdApproved)
  .put('/transactions/:id/reject', updateTransactionByIdRejected)

module.exports = transactionsRouter
