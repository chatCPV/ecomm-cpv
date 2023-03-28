const Accounts = require('../models/Account');
const cardValidation = require('./cardValidation');

class AccountController {
  static listAccountById = (req, res) => {
    const { id } = req.params;
    
    Accounts.findById(id, { card: 0 }, (err, accountById) => {
      if (err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(200).send(accountById);
      }
    });
  };

  static listAccountIdByCardNumber = (req, res) => {
    const card = req.body;
    console.log(card.cardNumber)

    Accounts.findOne({ 'card.cardNumber': card.cardNumber }, (err, acc) => {
      console.log(acc);
      if(acc == null) {
        return res.status(400).send({ message: "Invalid card number!" });
      }
      if(cardValidation(card, acc)) {
        Accounts.findById({ _id: acc._id }, { monthIncome: 1 }, (err, accVerified) => {
          res.status(200).send(accVerified);
        });
      } else {
        res.status(400).send({ message: "Invalid info!" })
      }
    })
  }
}

module.exports = AccountController;