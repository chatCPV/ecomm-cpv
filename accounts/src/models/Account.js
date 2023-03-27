const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpf: { 
      type: String,
      required: true
    },
    phone: { 
      type: String,
      required: true
    },
    monthIncome: {
      type: Number,
      required: true
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      complement: { type: String },
      neighborhood: { type: String },
      zipCode: { 
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    card: {
      cardHolder: {
        type: String,
        required: true
      },
      cardNumber: {
        type: String,
        required: true
      },
      cardExp: {
        type: String,
        required: true
      },
      cardCvv: {
        type: String,
        required: true
      },
      invoiceDueDate: {
        type: String,
        required: true
      }
    },
  },
);

const Accounts = mongoose.model('accounts', accountSchema);

module.exports = Accounts;
