const express = require('express');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/account.json');

const app = express();

app.use(express.json());

routes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;