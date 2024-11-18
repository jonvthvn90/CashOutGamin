const express = require('express');
const router = express.Router();
const gameSortService = require('../services/GameSortService');

router.get('/', async (req, res) => {
  const games = await gameSortService.sortGames(req.query.sort);
  res.send(games);
});

module.exports = router;