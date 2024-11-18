const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send({ count: users.length });
});

router.get('/games', async (req, res) => {
  const games = await Game.find();
  res.send({ count: games.length });
});

router.get('/payments', async (req, res) => {
  const payments = await Payment.find();
  res.send({ count: payments.length });
});

router.get('/revenue', async (req, res) => {
  const payments = await Payment.find();
  const revenue = payments.reduce((acc, payment) => acc + payment.amount, 0);
  res.send({ revenue });
});

module.exports = router;