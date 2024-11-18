const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
  name: String,
  description: String,
  scores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Score' }],
});

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);

module.exports = Leaderboard;