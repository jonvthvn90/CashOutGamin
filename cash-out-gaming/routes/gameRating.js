const express = require('express');
const router = express.Router();
const gameRatingLogic = require('../logic/gameRatingLogic');

router.post('/gameRating', async (req, res) => {
  const gameId = req.body.gameId;
  const rating = req.body.rating;
  const newRating = await gameRatingLogic.createGameRating(gameId, rating);
  if (newRating.error) return res.status(400).send(newRating);
  res.send(newRating);
});

module.exports = router;