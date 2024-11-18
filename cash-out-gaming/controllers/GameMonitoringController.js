const express = require('express');
const router = express.Router();
const gameMonitoringService = require('../services/GameMonitoringService');

router.get('/', async (req, res) => {
  const games = await gameMonitoringService.monitorGames(req.query.monitor);
  res.send(games);
});

module.exports = router;