const Game = require('./game');

const gameSearchLogic = {
  async searchGames(query) {
    const games = await Game.find({ name: { $regex: query, $options: 'i' } });
    if (!games) return { error: 'No games found' };
    return games;
  }
};

module.exports = gameSearchLogic;