const express = require('express');
const router = express.Router();
const gameDislikeLogic = require('./gameDislikeLogic');

router.post('/gameDislike', async (req, res) => {
  const gameId = req.body.gameId;
  const newDislike = await gameDislikeLogic.createGameDislike(gameId);
  if (newDislike.error) return res.status(400).send(newDislike);
  res.send(newDislike);
});

module.exports = router;