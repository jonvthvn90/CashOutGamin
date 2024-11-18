const express = require('express');
const router = express.Router();
const gameFavoriteLogic = require('../logic/gameFavoriteLogic');

router.post('/gameFavorite', async (req, res) => {
  const gameId = req.body.gameId;
  const newFavorite = await gameFavoriteLogic.createGameFavorite(gameId);
  if (newFavorite.error) return res.status(400).send(newFavorite);
  res.send(newFavorite);
});

module.exports = router;