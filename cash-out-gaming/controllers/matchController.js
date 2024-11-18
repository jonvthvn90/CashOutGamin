const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

router.post('/', async (req, res) => {
  const { tournamentId, team1, team2, startDate, endDate } = req.body;
  const match = new Match({ tournamentId, team1, team2, startDate, endDate });
  await match.save();
  res.json(match);
});

router.get('/', async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

router.get('/:id', async (req, res) => {
  const match = await Match.findById(req.params.id);
  res.json(match);
});

module.exports = router;