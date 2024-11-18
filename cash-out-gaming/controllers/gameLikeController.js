const express = require('express');
const router = express.Router();
const gameLikeLogic = require('./gameLikeLogic');

router.post('/gameLike', async (req, res) => {
  const gameId = req.body.gameId;
  const newLike = await gameLikeLogic.createGameLike(gameId);
  if (newLike.error) return res.status(400).send(newLike);
  res.send(newLike);
});

module.exports = router;