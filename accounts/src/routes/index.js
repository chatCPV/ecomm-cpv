const express = require('express');
const accounts = require('./accountRoutes');

const routes = (app) => {
  app.use(
    express.json(),
    accounts,
  );
};

module.exports = routes;