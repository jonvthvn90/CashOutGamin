const express = require('express');
const router = express.Router();
const gameUnfavoriteLogic = require('../logic/gameUnfavoriteLogic');

router.delete('/gameUnfavorite', async (req, res) => {
  const gameId = req.body.gameId;
  const result = await gameUnfavoriteLogic.deleteGameFavorite(gameId);
  if (result.error) return res.status(400).send(result);
  res.send(result);
});

module.exports = router;