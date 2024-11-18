const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');
const { validateTournament } = require('../utils/validators');

// Create a new tournament
router.post('/', async (req, res) => {
  try {
    const { title, description, image, price, category, startDate, endDate } = req.body;
    const tournament = new Tournament({ title, description, image, price, category, startDate, endDate });
    await tournament.save();
    res.json(tournament);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error });
  }
});

// Get all tournaments
router.get('/', async (req, res) => {
  try {
    const tournaments = await Tournament.find().sort({ startDate: 1 });
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Get a tournament by ID
router.get('/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.json(tournament);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Update a tournament
router.put('/:id', async (req, res) => {
  try {
    const { title, description, image, price, category, startDate, endDate } = req.body;
    const tournament = await Tournament.findByIdAndUpdate(req.params.id, { title, description, image, price, category, startDate, endDate }, { new: true });
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.json(tournament);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request', error });
  }
});

// Delete a tournament
router.delete('/:id', async (req, res) => {
  try {
    const tournament = await Tournament.findByIdAndRemove(req.params.id);
    if (!tournament) {
      return res.status(404).json({ message: 'Tournament not found' });
    }
    res.json({ message: 'Tournament deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

module.exports = router;