const express = require('express');
const router = express.Router();
const gameRecommendationLogic = require('./gameRecommendationLogic');

router.get('/gameRecommendations', async (req, res) => {
  const userId = req.query.userId;
  const games = await gameRecommendationLogic.getGameRecommendations(userId);
  if (games.error) return res.status(400).send(games);
  res.send(games);
});

module.exports = router;