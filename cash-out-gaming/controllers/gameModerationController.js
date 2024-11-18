const express = require('express');
const router = express.Router();
const gameModerationLogic = require('./gameModerationLogic');

router.post('/gameModeration', async (req, res) => {
  const gameId = req.body.gameId;
  const action = req.body.action;
  const newModeration = await gameModerationLogic.moderateGame(gameId, action);
  if (newModeration.error) return res.status(400).send(newModeration);
  res.send(newModeration);
});

module.exports = router;