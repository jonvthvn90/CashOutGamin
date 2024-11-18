const express = require('express');
const router = express.Router();
const gameService = require('../services/GameService');

router.get('/', async (req, res) => {
  const games = await gameService.getGames();
  res.send(games);
});

router.get('/:id', async (req, res) => {
  const game = await gameService.getGame(req.params.id);
  res.send(game);
});

router.post('/', async (req, res) => {
  const game = await gameService.createGame(req.body);
  res.send(game);
});

router.put('/:id', async (req, res) => {
  const game = await gameService.updateGame(req.params.id, req.body);
  res.send(game);
});

module.exports = router;