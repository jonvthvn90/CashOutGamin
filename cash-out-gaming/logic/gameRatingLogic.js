const Game = require('./game');
const Rating = require('./rating');

const gameRatingLogic = {
  async createGameRating(gameId, rating) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newRating = new Rating({ gameId: gameId, rating: rating });
    await newRating.save();
    return newRating;
  }
};

module.exports = gameRatingLogic;