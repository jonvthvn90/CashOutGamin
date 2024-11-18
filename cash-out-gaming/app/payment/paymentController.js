const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const cashAppPayController = require('./cashAppPayController');
const paypalController = require('./paypalController');

router.post('/payment', async (req, res) => {
  const { amount, currency, paymentMethod } = req.body;
  let payment;

  if (paymentMethod === 'cash_app_pay') {
    payment = await cashAppPayController.createPayment({ amount, currency });
  } else if (paymentMethod === 'paypal') {
    payment = await paypalController.createPayment({ amount, currency });
  } else {
    return res.status(400).send('Invalid payment method');
  }

  const paymentDoc = await Payment.create({ amount, currency, paymentMethod });
  paymentDoc.paymentId = payment.id;
  await paymentDoc.save();
  res.send(paymentDoc);
});

module.exports = router;