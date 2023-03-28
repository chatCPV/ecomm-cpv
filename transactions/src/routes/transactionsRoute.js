  const { Router } = require('express');
  const transactionsController = require('../controllers/transactionsController.js');

  const transactionsRouter = Router();

  transactionsRouter
    .post('/transactions', transactionsController.createTransaction);

  module.export = transactionsRouter;