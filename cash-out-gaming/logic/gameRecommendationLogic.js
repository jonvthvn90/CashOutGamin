const Game = require('./game');
const Player = require('./player');

const gameRecommendationLogic = {
  async getGameRecommendations(userId) {
    const player = await Player.findOne({ userId: userId });
    if (!player) return { error: 'Player not found' };
    const games = await Game.find({ genre: player.preferredGenre });
    if (!games) return { error: 'No games found' };
    return games;
  }
};

module.exports = gameRecommendationLogic;