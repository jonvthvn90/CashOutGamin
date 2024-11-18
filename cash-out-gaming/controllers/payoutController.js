const express = require('express');
const router = express.Router();
const Payout = require('../models/Payout');

router.post('/', async (req, res) => {
  const { userId, amount, currency, paymentMethod } = req.body;
  const payout = new Payout({ userId, amount, currency, paymentMethod });
  await payout.save();
  res.json(payout);
});

router.get('/', async (req, res) => {
  const payouts = await Payout.find();
  res.json(payouts);
});

router.get('/:id', async (req, res) => {
  const payout = await Payout.findById(req.params.id);
  res.json(payout);
});

module.exports = router;