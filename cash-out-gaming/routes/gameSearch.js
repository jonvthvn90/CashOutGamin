const express = require('express');
const router = express.Router();
const gameSearchLogic = require('../logic/gameSearchLogic');

router.get('/gameSearch', async (req, res) => {
  const query = req.query.query;
  const games = await gameSearchLogic.searchGames(query);
  if (games.error) return res.status(400).send(games);
  res.send(games);
});

module.exports = router;