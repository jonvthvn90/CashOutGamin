const express = require('express');
const router = express.Router();
const gameRankingLogic = require('./gameRankingLogic');

router.get('/gameRanking', async (req, res) => {
  const userId = req.query.userId;
  const gameRanking = await gameRankingLogic.getGameRanking(userId);
  if (gameRanking.error) return res.status(400).send(gameRanking);
  res.send(gameRanking);
});

module.exports = router;