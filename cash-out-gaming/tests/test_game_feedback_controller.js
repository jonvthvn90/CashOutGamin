const GameFeedbackController = require('../controllers/GameFeedbackController');
const GameFeedback = require('../models/GameFeedback');
const assert = require('assert');

describe('GameFeedbackController', () => {
  it('should create a new game feedback', async () => {
    const gameFeedback = await GameFeedbackController.createGameFeedback({ text: 'Test game feedback' });
    assert(gameFeedback._id);
  });

  it('should retrieve a game feedback by id', async () => {
    const gameFeedback = await GameFeedbackController.getGameFeedback('1234567890');
    assert(gameFeedback);
  });

  it('should update a game feedback', async () => {
    const gameFeedback = await GameFeedbackController.updateGameFeedback('1234567890', { text: 'Updated test game feedback' });
    assert(gameFeedback.text === 'Updated test game feedback');
  });

  it('should delete a game feedback', async () => {
    await GameFeedbackController.deleteGameFeedback('1234567890');
    const gameFeedback = await GameFeedbackController.getGameFeedback('1234567890');
    assert(!gameFeedback);
  });
});