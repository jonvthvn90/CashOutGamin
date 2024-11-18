const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: Number,
  method: String,
  status: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;