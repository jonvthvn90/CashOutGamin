const Game = require('./game');
const Player = require('./player');

const gameRankingLogic = {
  async getGameRanking(userId) {
    const player = await Player.findOne({ userId: userId });
    if (!player) return { error: 'Player not found' };
    const games = await Game.find({ playerId: player.id });
    if (!games) return { error: 'No games found' };
    const gameRanking = games.map(game => {
      return {
        gameId: game.id,
        gameName: game.name,
        score: game.score,
        rank: game.rank
      };
    });
    return gameRanking;
  }
};

module.exports = gameRankingLogic;