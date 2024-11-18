const GameReviewController = require('../controllers/GameReviewController');
const GameReview = require('../models/GameReview');
const assert = require('assert');

describe('GameReviewController', () => {
  it('should create a new game review', async () => {
    const gameReview = await GameReviewController.createGameReview({ text: 'Test game review' });
    assert(gameReview._id);
  });

  it('should retrieve a game review by id', async () => {
    const gameReview = await GameReviewController.getGameReview('1234567890');
    assert(gameReview);
  });

  it('should update a game review', async () => {
    const gameReview = await GameReviewController.updateGameReview('1234567890', { text: 'Updated test game review' });
    assert(gameReview.text === 'Updated test game review');
  });

  it('should delete a game review', async () => {
    await GameReviewController.deleteGameReview('1234567890');
    const gameReview = await GameReviewController.getGameReview('1234567890');
    assert(!gameReview);
  });
});