const express = require('express')
const AccountController = require('../controllers/accountController')

const router = express.Router()

router
  .get('/accounts/:id', AccountController.listAccountById)
  .post('/accounts/cardVerify', AccountController.listAccountIdByCardNumber)

module.exports = router
