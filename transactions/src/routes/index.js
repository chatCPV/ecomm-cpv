const transactionsRouter = require('./transactionsRoute')

const routes = (app) => {
  app.route('/').get((_req, res) => {
    res.status(200).send('EcommCPV Project')
  })

  app.use(
    transactionsRouter,
  )
}

module.exports = routes
