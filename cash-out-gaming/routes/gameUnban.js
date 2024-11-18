const express = require('express');
const router = express.Router();
const gameUnbanLogic = require('../game-logic/gameUnbanLogic');

router.delete('/gameUnban', async (req, res) => {
  const gameId = req.body.gameId;
  const result = await gameUnbanLogic.unbanGame(gameId);
  if (result.error) return res.status(400).send(result);
  res.send(result);
});

module.exports = router;