const express = require('express');
const router = express.Router();
const gamePaginationService = require('../services/GamePaginationService');

router.get('/', async (req, res) => {
  const games = await gamePaginationService.paginateGames(req.query.page, req.query.limit);
  res.send(games);
});

module.exports = router;