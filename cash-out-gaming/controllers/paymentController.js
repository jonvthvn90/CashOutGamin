const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

router.post('/', async (req, res) => {
  const { amount, currency, paymentMethod } = req.body;
  const payment = new Payment({ amount, currency, paymentMethod });
  await payment.save();
  res.json(payment);
});

router.get('/', async (req, res) => {
  const payments = await Payment.find();
  res.json(payments);
});

router.get('/:id', async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  res.json(payment);
});

module.exports = router;