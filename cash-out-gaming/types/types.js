const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ message: 'Types endpoint' });
});

router.get('/users', async (req, res) => {
  res.send({ message: 'Users type endpoint' });
});

router.get('/tournaments', async (req, res) => {
  res.send({ message: 'Tournaments type endpoint' });
});

module.exports = router;