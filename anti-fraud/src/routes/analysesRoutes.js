const express = require('express')
const AnalysesController = require('../controllers/analysesController')

const router = express.Router()

router.post('/antifraud', AnalysesController.createAnalysis)
router.get('/antifraud', AnalysesController.listAllUnderAnalysis)
router.post('/antifraud/approve/:id', AnalysesController.approveAnalysis)
router.post('/antifraud/reprove/:id', AnalysesController.reproveAnalysis)

module.exports = router
