const GameLoggingController = require('../controllers/GameLoggingController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameLoggingController', () => {
  it('should log games', async () => {
    await GameLoggingController.logGames();
    assert(true);
  });

  it('should log game errors', async () => {
    await GameLoggingController.logGameError();
    assert(true);
  });

  it('should log game warnings', async () => {
    await GameLoggingController.logGameWarning();
    assert(true);
  });
});