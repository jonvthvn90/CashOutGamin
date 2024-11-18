const express = require('express');
const router = express.Router();
const gameRatingService = require('../services/GameRatingService');

router.post('/', async (req, res) => {
  const gameRating = await gameRatingService.createGameRating(req.body);
  res.send(gameRating);
});

module.exports = router;