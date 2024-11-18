const express = require('express');
const router = express.Router();
const gameLoggingService = require('../services/GameLoggingService');

router.get('/', async (req, res) => {
  const games = await gameLoggingService.logGames(req.query.log);
  res.send(games);
});

module.exports = router;