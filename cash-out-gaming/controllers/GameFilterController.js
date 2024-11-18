const express = require('express');
const router = express.Router();
const gameFilterService = require('../services/GameFilterService');

router.get('/', async (req, res) => {
  const games = await gameFilterService.filterGames(req.query.filter);
  res.send(games);
});

module.exports = router;