const GameRatingService = require('../services/GameRatingService');
const GameRating = require('../models/GameRating');
const assert = require('assert');

describe('GameRatingService', () => {
  it('should create a new game rating', async () => {
    const gameRating = await GameRatingService.createGameRating({ rating: 5 });
    assert(gameRating._id);
  });

  it('should retrieve a game rating by id', async () => {
    const gameRating = await GameRatingService.getGameRating('1234567890');
    assert(gameRating);
  });

  it('should update a game rating', async () => {
    const gameRating = await GameRatingService.updateGameRating('1234567890', { rating: 4 });
    assert(gameRating.rating === 4);
  });

  it('should delete a game rating', async () => {
    await GameRatingService.deleteGameRating('1234567890');
    const gameRating = await GameRatingService.getGameRating('1234567890');
    assert(!gameRating);
  });
});