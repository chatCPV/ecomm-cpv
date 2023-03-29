const express = require('express')
const analysesRoutes = require('./analysesRoutes')

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json()
  })

  app.use(
    express.json(),
    analysesRoutes,
  )
}

module.exports = routes
