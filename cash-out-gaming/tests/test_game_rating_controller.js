const GameRatingController = require('../controllers/GameRatingController');
const GameRating = require('../models/GameRating');
const assert = require('assert');

describe('GameRatingController', () => {
  it('should create a new game rating', async () => {
    const gameRating = await GameRatingController.createGameRating({ rating: 5 });
    assert(gameRating._id);
  });

  it('should retrieve a game rating by id', async () => {
    const gameRating = await GameRatingController.getGameRating('1234567890');
    assert(gameRating);
  });

  it('should update a game rating', async () => {
    const gameRating = await GameRatingController.updateGameRating('1234567890', { rating: 4 });
    assert(gameRating.rating === 4);
  });

  it('should delete a game rating', async () => {
    await GameRatingController.deleteGameRating('1234567890');
    const gameRating = await GameRatingController.getGameRating('1234567890');
    assert(!gameRating);
  });
});