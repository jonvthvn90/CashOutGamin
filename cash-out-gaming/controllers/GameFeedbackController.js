const express = require('express');
const router = express.Router();
const gameFeedbackService = require('../services/GameFeedbackService');

router.post('/', async (req, res) => {
  const gameFeedback = await gameFeedbackService.createGameFeedback(req.body);
  res.send(gameFeedback);
});

module.exports = router;