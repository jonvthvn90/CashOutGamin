const express = require('express');
const router = express.Router();
const gameBanLogic = require('../logic/gameBanLogic');

router.post('/gameBan', async (req, res) => {
  const gameId = req.body.gameId;
  const newBan = await gameBanLogic.banGame(gameId);
  if (newBan.error) return res.status(400).send(newBan);
  res.send(newBan);
});

module.exports = router;