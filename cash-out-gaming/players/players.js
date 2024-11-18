const express = require('express');
const router = express.Router();
const playerController = require('./player-controller');

router.get('/', async (req, res) => {
  const players = await playerController.getAllPlayers();
  res.send(players);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const player = await playerController.getPlayerById(id);
  res.send(player);
});

router.post('/', async (req, res) => {
  const player = new Player(req.body);
  await playerController.createPlayer(player);
  res.send({ message: 'Player created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const player = await playerController.getPlayerById(id);
  player.name = req.body.name;
  player.email = req.body.email;
  await playerController.updatePlayer(player);
  res.send({ message: 'Player updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await playerController.deletePlayer(id);
  res.send({ message: 'Player deleted successfully' });
});

module.exports = router;