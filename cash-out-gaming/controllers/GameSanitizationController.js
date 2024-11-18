const express = require('express');
const router = express.Router();
const gameSanitizationService = require('../services/GameSanitizationService');

router.post('/', async (req, res) => {
  const game = await gameSanitizationService.sanitizeGame(req.body);
  res.send(game);
});

module.exports = router;