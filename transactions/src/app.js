const express = require('express');
const db = require('./config/dbconnect.js');
const routes = require('./routes/index.js');

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('conexão feita com sucesso');
});

const app = express();
app.use(express.json());
routes(app);

module.exports = app;