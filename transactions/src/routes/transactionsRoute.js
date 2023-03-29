const { Router } = require('express')
const createTransaction = require('../controllers/transactionsController')

const transactionsRouter = Router()

transactionsRouter
  .post('/transactions', createTransaction)

module.exports = transactionsRouter
