const Game = require('./game');
const Favorite = require('./favorite');

const gameFavoriteLogic = {
  async createGameFavorite(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newFavorite = new Favorite({ gameId: gameId });
    await newFavorite.save();
    return newFavorite;
  }
};

module.exports = gameFavoriteLogic;