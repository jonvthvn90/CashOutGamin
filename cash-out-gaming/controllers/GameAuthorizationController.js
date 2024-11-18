const express = require('express');
const router = express.Router();
const gameAuthorizationService = require('../services/GameAuthorizationService');

router.get('/authorize', async (req, res) => {
  const game = await gameAuthorizationService.authorize(req.query);
  res.send(game);
});

module.exports = router;