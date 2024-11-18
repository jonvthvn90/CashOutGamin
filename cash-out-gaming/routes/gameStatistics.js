const express = require('express');
const router = express.Router();
const gameStatisticsLogic = require('../logic/gameStatisticsLogic');

router.get('/gameStatistics', async (req, res) => {
  const userId = req.query.userId;
  const gameStatistics = await gameStatisticsLogic.getGameStatistics(userId);
  if (gameStatistics.error) return res.status(400).send(gameStatistics);
  res.send(gameStatistics);
});

module.exports = router;