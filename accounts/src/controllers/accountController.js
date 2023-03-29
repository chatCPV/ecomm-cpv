const Accounts = require('../models/Account');

class AccountController {
  static listAccountById = async (req, res) => {
    const { id } = req.params;
    const result = await Accounts.findById(id, { card: 0 });
    if (!result) {
      res.status(404).send({ message: "Account not found!" });
    } else {
      res.status(200).json(result);
    }
  };
}

module.exports = AccountController;
