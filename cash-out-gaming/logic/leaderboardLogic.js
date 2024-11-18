const Leaderboard = require('../models/Leaderboard');

const leaderboardLogic = {
  async getLeaderboard(gameId) {
    const leaderboard = await Leaderboard.findOne({ gameId: gameId });
    if (!leaderboard) return { error: 'Leaderboard not found' };
    return leaderboard;
  },
};

module.exports = leaderboardLogic;