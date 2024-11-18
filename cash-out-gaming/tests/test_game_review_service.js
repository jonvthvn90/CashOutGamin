const GameReviewService = require('../services/GameReviewService');
const GameReview = require('../models/GameReview');
const assert = require('assert');

describe('GameReviewService', () => {
  it('should create a new game review', async () => {
    const gameReview = await GameReviewService.createGameReview({ text: 'Test game review' });
    assert(gameReview._id);
  });

  it('should retrieve a game review by id', async () => {
    const gameReview = await GameReviewService.getGameReview('1234567890');
    assert(gameReview);
  });

  it('should update a game review', async () => {
    const gameReview = await GameReviewService.updateGameReview('1234567890', { text: 'Updated test game review' });
    assert(gameReview.text === 'Updated test game review');
  });

  it('should delete a game review', async () => {
    await GameReviewService.deleteGameReview('1234567890');
    const gameReview = await GameReviewService.getGameReview('1234567890');
    assert(!gameReview);
  });
});