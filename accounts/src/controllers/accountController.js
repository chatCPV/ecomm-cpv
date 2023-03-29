const Accounts = require('../models/Account')
const cardValidation = require('./cardValidation')

class AccountController {
  static listAccountById = (req, res) => {
    const { id } = req.params

    Accounts.findById(id, { card: 0 }, (err, accountById) => {
      if (err) {
        res.status(404).send({ message: 'Id not found!' })
      } else {
        res.status(200).send(accountById)
      }
    })
  }

  static listAccountIdByCardNumber = async (req, res) => {
    const card = req.body
    const acc = await Accounts.findOne({ 'card.cardNumber': card.cardNumber })

    if (!acc) {
      return res.status(400).send({ message: 'Invalid info!' })
    }
    if (cardValidation(card, acc)) {
      // eslint-disable-next-line no-underscore-dangle
      const accVerified = await Accounts.findById({ _id: acc._id }, { monthIncome: 1 })
      return res.status(200).send(accVerified)
    }
    return res.status(400).send({ message: 'Invalid info!' })
  }
}

module.exports = AccountController
