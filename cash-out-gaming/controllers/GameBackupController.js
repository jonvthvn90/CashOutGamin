const express = require('express');
const router = express.Router();
const gameBackupService = require('../services/GameBackupService');

router.get('/', async (req, res) => {
  const games = await gameBackupService.backupGames(req.query.backup);
  res.send(games);
});

module.exports = router;