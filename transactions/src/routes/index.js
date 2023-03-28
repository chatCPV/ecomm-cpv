const transactions = require('./transactionsRoute.js');

const routes = (app) => {
    app.use(
        transactions,
    );
};

module.exports = routes;