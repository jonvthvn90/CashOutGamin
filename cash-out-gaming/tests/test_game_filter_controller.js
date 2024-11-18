const GameFilterController = require('../controllers/GameFilterController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameFilterController', () => {
  it('should filter games by genre', async () => {
    const games = await GameFilterController.filterGames('Action');
    assert(games.length > 0);
  });

  it('should filter games by platform', async () => {
    const games = await GameFilterController.filterGames('PC');
    assert(games.length > 0);
  });

  it('should filter games by rating', async () => {
    const games = await GameFilterController.filterGames(5);
    assert(games.length > 0);
  });
});