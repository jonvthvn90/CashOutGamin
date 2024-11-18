const express = require('express');
const router = express.Router();
const gameReviewLogic = require('../logic/gameReviewLogic');

router.post('/gameReview', async (req, res) => {
  const gameId = req.body.gameId;
  const review = req.body.review;
  const newReview = await gameReviewLogic.createGameReview(gameId, review);
  if (newReview.error) return res.status(400).send(newReview);
  res.send(newReview);
});

module.exports = router;