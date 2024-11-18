const express = require('express');
const router = express.Router();
const gameAuthenticationService = require('../services/GameAuthenticationService');

router.post('/login', async (req, res) => {
  const game = await gameAuthenticationService.login(req.body);
  res.send(game);
});

router.post('/register', async (req, res) => {
  const game = await gameAuthenticationService.register(req.body);
  res.send(game);
});

module.exports = router;