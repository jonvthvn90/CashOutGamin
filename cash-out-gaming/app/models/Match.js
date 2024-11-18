const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  tournamentId: String,
  team1: String,
  team2: String,
  startDate: Date,
  endDate: Date,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;