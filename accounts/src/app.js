const express = require('express');
require('express-async-errors');

const routes = require('./routes/index');

const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.use(express.json());

routes(app);

app.use(errorHandlerMiddleware);

module.exports = app;
