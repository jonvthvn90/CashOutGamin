const express = require('express');
const router = express.Router();
const gameAnalyticsLogic = require('../logic/gameAnalyticsLogic');

router.post('/gameAnalytics', async (req, res) => {
  const gameId = req.body.gameId;
  const event = req.body.event;
  const newAnalytics = await gameAnalyticsLogic.trackGameAnalytics(gameId, event);
  if (newAnalytics.error) return res.status(400).send(newAnalytics);
  res.send(newAnalytics);
});

module.exports = router;