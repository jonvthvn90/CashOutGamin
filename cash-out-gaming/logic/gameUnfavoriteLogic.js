const Game = require('./game');
const Favorite = require('./favorite');

const gameUnfavoriteLogic = {
  async deleteGameFavorite(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    await Favorite.deleteOne({ gameId: gameId });
    return { message: 'Game unfavorited successfully' };
  }
};

module.exports = gameUnfavoriteLogic;