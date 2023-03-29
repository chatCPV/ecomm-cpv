const Accounts = require('../models/Account');
const cardValidation = require('./cardValidation');

class AccountController {
  static listAccountById = (req, res) => {
    const { id } = req.params;
    
    Accounts.findById(id, { card: 0 }, (err, accountById) => {
      if (err) {
        res.status(400).send({ message: "Id not found!"});
      } else {
        res.status(200).send(accountById);
      }
    });
  };

  static listAccountIdByCardNumber = async (req, res) => {
    const card = req.body;
    const acc = await Accounts.findOne({ 'card.cardNumber': card.cardNumber });

    if(!acc) {
      return res.status(400).send({ message: "Invalid card number!" });
    } else if(cardValidation(card, acc)) {
      const accVerified = await Accounts.findById({ _id: acc._id }, { monthIncome: 1 });
      res.status(200).send(accVerified);
    } else {
      res.status(400).send({ message: "Invalid info!" })
    }
  }
}

module.exports = AccountController;