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

  static approveAnalysis = async (req, res) => {
    const { id } = req.params
    const currentAnalysis = await AnalysisModel.findById(id, { status: 1 })

    if (currentAnalysis.status !== statuses.ANALYSIS) {
      res.status(409).send('Status can not be changed')
    } else {
      AnalysisModel.findByIdAndUpdate(
        id,
        { $set: { status: statuses.APPROVED } },
        { new: true },
        (err) => {
          if (err) {
            res.status(500).send({ message: `${err.message} - Failed` })
          } else {
            res.status(204).send({ message: 'Status successfully updated' })
          }
        },
      )
    }
  }

  static reproveAnalysis = async (req, res) => {
    const { id } = req.params
    const currentAnalysis = await AnalysisModel.findById(id, { status: 1 })

    if (currentAnalysis.status !== statuses.ANALYSIS) {
      res.status(409).send('Status can not be changed')
    } else {
      AnalysisModel.findByIdAndUpdate(
        id,
        { $set: { status: statuses.REPROVED } },
        { new: true },
        (err) => {
          if (err) {
            res.status(500).send({ message: `${err.message} - Failed` })
          } else {
            res.status(204).send({ message: 'Status successfully updated' })
          }
        },
      )
    }
  }

  static getAnalysisById = (req, res) => {
    const { id } = req.params

    const singleAnalysis = AnalysisModel.findById(id, (err, analyses) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - Failed` })
      } else if (!singleAnalysis) {
        res.status(404).send({ message: 'Analysis not found' })
      } else {
        res.status(200).send(analyses.toJSON())
      }
    })
  }
}

module.exports = AnalysesController
