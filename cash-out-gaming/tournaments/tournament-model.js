const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;