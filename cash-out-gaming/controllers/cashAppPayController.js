const express = require('express');
const router = express.Router();
const cashAppPay = require('cash-app-pay');

router.post('/', async (req, res) => {
  const { amount, currency } = req.body;
  const payment = await cashAppPay.createPayment({
    amount,
    currency,
    payment_method: 'cash_app_pay',
  });
  res.json(payment);
});

router.post('/callback', async (req, res) => {
  const { paymentId } = req.body;
  const payment = await cashAppPay.getPayment(paymentId);
  res.json(payment);
});

module.exports = router;