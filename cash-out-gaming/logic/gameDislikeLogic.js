const Game = require('./game');
const Dislike = require('./dislike');

const gameDislikeLogic = {
  async createGameDislike(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newDislike = new Dislike({ gameId: gameId });
    await newDislike.save();
    return newDislike;
  }
};

module.exports = gameDislikeLogic;