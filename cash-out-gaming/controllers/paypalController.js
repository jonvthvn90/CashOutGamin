const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');

router.post('/', async (req, res) => {
  const { amount, currency } = req.body;
  const payment = await paypal.payment.create({
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    transactions: [
      {
        amount: {
          currency,
          total: amount,
        },
      },
    ],
  });
  res.json(payment);
});

router.post('/callback', async (req, res) => {
  const { paymentId } = req.body;
  const payment = await paypal.payment.get(paymentId);
  res.json(payment);
});

module.exports = router;