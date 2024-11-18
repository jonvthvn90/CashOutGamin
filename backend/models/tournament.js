const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    game: { type: String, required: true },
    entryFee: { type: Number, required: true },
    maxPlayers: { type: Number, required: true },
    currentPlayers: { type: Number, default: 0 },
    status: { type: String, enum: ['pending', 'ongoing', 'completed'], default: 'pending' },
    prizePool: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Tournament', tournamentSchema);
// JavaScript Document