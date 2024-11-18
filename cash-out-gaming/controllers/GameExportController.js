const express = require('express');
const router = express.Router();
const gameExportService = require('../services/GameExportService');

router.get('/', async (req, res) => {
  const games = await gameExportService.exportGames(req.query.export);
  res.send(games);
});

module.exports = router;