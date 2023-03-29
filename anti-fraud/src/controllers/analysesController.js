const AnalysisModel = require('../models/analysisModel')
const statuses = require('../helpers/statuses')

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

  static listAllUnderAnalysis = (req, res) => {
    AnalysisModel.find({ status: statuses.ANALYSIS }, (err, analyses) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failed` })
      } else {
        res.status(200).json(analyses)
      }
    })
  }
}

module.exports = AnalysesController
