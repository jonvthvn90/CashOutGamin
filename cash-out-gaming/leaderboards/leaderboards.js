const express = require('express');
const router = express.Router();
const leaderboardController = require('./leaderboard-controller');

router.get('/', async (req, res) => {
  const leaderboards = await leaderboardController.getAllLeaderboards();
  res.send(leaderboards);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const leaderboard = await leaderboardController.getLeaderboardById(id);
  res.send(leaderboard);
});

router.post('/', async (req, res) => {
  const leaderboard = new Leaderboard(req.body);
  await leaderboardController.createLeaderboard(leaderboard);
  res.send({ message: 'Leaderboard created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const leaderboard = await leaderboardController.getLeaderboardById(id);
  leaderboard.name = req.body.name;
  leaderboard.description = req.body.description;
  await leaderboardController.updateLeaderboard(leaderboard);
  res.send({ message: 'Leaderboard updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await leaderboardController.deleteLeaderboard(id);
  res.send({ message: 'Leaderboard deleted successfully' });
});

module.exports = router;