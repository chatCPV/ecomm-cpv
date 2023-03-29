const express = require('express')
const AnalysesController = require('../controllers/analysesController')

const router = express.Router()

router.post('/antifraud', AnalysesController.createAnalysis)

module.exports = router
