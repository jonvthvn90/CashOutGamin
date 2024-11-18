const Game = require('./game');
const Player = require('./player');

const gameStatisticsLogic = {
  async getGameStatistics(userId) {
    const player = await Player.findOne({ userId: userId });
    if (!player) return { error: 'Player not found' };
    const games = await Game.find({ playerId: player.id });
    if (!games) return { error: 'No games found' };
    const gameStatistics = {
      totalGames: games.length,
      totalScore: games.reduce((acc, game) => acc + game.score, 0),
      averageScore: games.reduce((acc, game) => acc + game.score, 0) / games.length
    };
    return gameStatistics;
  }
};

module.exports = gameStatisticsLogic;