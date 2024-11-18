const express = require('express');
const router = express.Router();
const gameImportService = require('../services/GameImportService');

router.post('/', async (req, res) => {
  const games = await gameImportService.importGames(req.body);
  res.send(games);
});

module.exports = router;