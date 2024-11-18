const express = require('express');
const router = express.Router();
const gameController = require('./game-controller');

router.get('/', async (req, res) => {
  const games = await gameController.getAllGames();
  res.send(games);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const game = await gameController.getGameById(id);
  res.send(game);
});

router.post('/', async (req, res) => {
  const game = new Game(req.body);
  await gameController.createGame(game);
  res.send({ message: 'Game created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const game = await gameController.getGameById(id);
  game.name = req.body.name;
  game.description = req.body.description;
  game.players = req.body.players;
  game.duration = req.body.duration;
  await gameController.updateGame(game);
  res.send({ message: 'Game updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await gameController.deleteGame(id);
  res.send({ message: 'Game deleted successfully' });
});

module.exports = router;