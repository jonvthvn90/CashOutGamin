const express = require('express');
const router = express.Router();
const gameReviewService = require('../services/GameReviewService');

router.post('/', async (req, res) => {
  const gameReview = await gameReviewService.createGameReview(req.body);
  res.send(gameReview);
});

module.exports = router;