const express = require('express');
const accounts = require('./accountRoutes');

const API = 'API Accounts';

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send({ titulo: API });
  });

  app.use(
    express.json(),
    accounts,
  );
}

module.exports = routes;
