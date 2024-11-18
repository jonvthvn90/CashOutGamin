const Game = require('./game');
const Like = require('./like');

const gameLikeLogic = {
  async createGameLike(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newLike = new Like({ gameId: gameId });
    await newLike.save();
    return newLike;
  }
};

module.exports = gameLikeLogic;