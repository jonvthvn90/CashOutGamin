const express = require('express');
const router = express.Router();
const gameRestoreService = require('../services/GameRestoreService');

router.get('/', async (req, res) => {
  const games = await gameRestoreService.restoreGames(req.query.restore);
  res.send(games);
});

module.exports = router;