const Accounts = require('../models/Account');

function cardValidation (card, acc) {
    if (
        card.name === acc.name && 
        card.cardExp === acc.card.cardExp && 
        card.cardCvv === acc.card.cardCvv &&
        card.cardNumber === acc.card.cardNumber) {
        return true;
    }
    else {
        return false;
    }
};

module.exports = cardValidation ;