const express = require('express')
const AnalysesController = require('../controllers/analysesController')

const router = express.Router()

router.post('/antifraud', AnalysesController.createAnalysis)
router.get('/antifraud', AnalysesController.listAllUnderAnalysis)

module.exports = router
