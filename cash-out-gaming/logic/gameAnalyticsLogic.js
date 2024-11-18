const Game = require('./game');
const Analytics = require('./analytics');

const gameAnalyticsLogic = {
  async trackGameAnalytics(gameId, event) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newAnalytics = new Analytics({ gameId: gameId, event: event });
    await newAnalytics.save();
    return newAnalytics;
  }
};

module.exports = gameAnalyticsLogic;