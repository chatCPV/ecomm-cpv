const AnalysisModel = require('../models/analysisModel')

class AnalysesController {
  static createAnalysis = (req, res) => {
    const analyses = new AnalysisModel(req.body)

    analyses.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failed` })
      } else {
        res.status(201).send(analyses.toJSON())
      }
    })
  }
}

module.exports = AnalysesController
