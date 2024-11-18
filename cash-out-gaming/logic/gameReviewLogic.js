const Game = require('./game');
const Review = require('./review');

const gameReviewLogic = {
  async createGameReview(gameId, review) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const newReview = new Review({ gameId: gameId, review: review });
    await newReview.save();
    return newReview;
  }
};

module.exports = gameReviewLogic;