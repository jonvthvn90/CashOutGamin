const Leaderboard = require('./leaderboard-model');

const getLeaderboardScores = async (id) => {
  const leaderboard = await Leaderboard.findById(id);
  const scores = await leaderboard.scores;
  return scores;
};

const addScoreToLeaderboard = async (id, score) => {
  const leaderboard = await Leaderboard.findById(id);
  leaderboard.scores.push(score);
  await leaderboard.save();
};

const removeScoreFromLeaderboard = async (id, scoreId) => {
  const leaderboard = await Leaderboard.findById(id);
  const scoreIndex = leaderboard.scores.indexOf(scoreId);
  if (scoreIndex !== -1) {
    leaderboard.scores.splice(scoreIndex, 1);
    await leaderboard.save();
  }
};

module.exports = {
  getLeaderboardScores,
  addScoreToLeaderboard,
  removeScoreFromLeaderboard,
};