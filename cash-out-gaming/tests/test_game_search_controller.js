const GameSearchController = require('../controllers/GameSearchController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameSearchController', () => {
  it('should search for games by title', async () => {
    const games = await GameSearchController.searchGames('Test Game');
    assert(games.length > 0);
  });

  it('should search for games by description', async () => {
    const games = await GameSearchController.searchGames('Test game description');
    assert(games.length > 0);
  });

  it('should search for games by genre', async () => {
    const games = await GameSearchController.searchGames('Action');
    assert(games.length > 0);
  });
});