const { Router } = require('express')
const { createTransaction, getTransactionById } = require('../controllers/transactionsController')

const transactionsRouter = Router()

transactionsRouter
  .get('/transactions/:id', getTransactionById)
  .post('/transactions', createTransaction)

module.exports = transactionsRouter
