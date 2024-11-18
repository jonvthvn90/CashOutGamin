const express = require('express');
const router = express.Router();
const gameSearchService = require('../services/GameSearchService');

router.get('/', async (req, res) => {
  const games = await gameSearchService.searchGames(req.query.query);
  res.send(games);
});

module.exports = router;