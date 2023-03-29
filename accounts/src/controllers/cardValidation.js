function cardValidation (card, acc) {
    if (
        card.name === acc.name && 
        card.cardExp === acc.card.cardExp && 
        card.cardCvv === acc.card.cardCvv
       ) {
      return true;
    }
    else {
      return false;
    }
};

module.exports = cardValidation ;