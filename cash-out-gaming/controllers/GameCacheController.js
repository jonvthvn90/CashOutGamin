const express = require('express');
const router = express.Router();
const gameCacheService = require('../services/GameCacheService');

router.get('/', async (req, res) => {
  const games = await gameCacheService.cacheGames(req.query.cache);
  res.send(games);
});

module.exports = router;