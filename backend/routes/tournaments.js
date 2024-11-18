const express = require('express');
const Tournament = require('../models/tournament');
const router = express.Router();

// Create a new tournament (admin only)
router.post('/', async (req, res) => {
    try {
        const { name, type, prizePool } = req.body;
        const newTournament = new Tournament({ name, type, prizePool });
        await newTournament.save();
        res.status(201).json({ message: 'Tournament created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create tournament' });
    }
});

// Get all tournaments
router.get('/', async (req, res) => {
    try {
        const tournaments = await Tournament.find();
        res.json(tournaments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tournaments' });
    }
});

// Get a specific tournament
router.get('/:id', async (req, res) => {
    try {
        const tournament = await Tournament.findById(req.params.id);
        if (!tournament) return res.status(404).json({ error: 'Tournament not found' });
        res.json(tournament);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch tournament' });
    }
});

// Update a tournament (admin only)
router.put('/:id', async (req, res) => {
    try {
        const updatedTournament = await Tournament.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTournament);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update tournament' });
    }
});

// Delete a tournament (admin only)
router.delete('/:id', async (req, res) => {
    try {
        await Tournament.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tournament deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete tournament' });
    }
});

module.exports = router;
// JavaScript Document