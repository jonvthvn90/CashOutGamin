const express = require('express');
const router = express.Router();
const Leaderboard = require('../models/Leaderboard');

router.post('/', async (req, res) => {
  const { tournamentId, team, points, wins, losses } = req.body;
  const leaderboard = new Leaderboard({ tournamentId, team, points, wins, losses });
  await leaderboard.save();
  res.json(leaderboard);
});

router.get('/', async (req, res) => {
  const leaderboards = await Leaderboard.find();
  res.json(leaderboards);
});

router.get('/:id', async (req, res) => {
  const leaderboard = await Leaderboard.findById(req.params.id);
  res.json(leaderboard);
});

module.exports = router;