const Accounts = require('../models/Account');

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
}

module.exports = AccountController;