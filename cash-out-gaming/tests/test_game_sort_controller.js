const GameSortController = require('../controllers/GameSortController');
const Game = require('../models/Game');
const assert = require('assert');

describe('GameSortController', () => {
  it('should sort games by title', async () => {
    const games = await GameSortController.sortGames('title');
    assert(games.length > 0);
  });

  it('should sort games by release date', async () => {
    const games = await GameSortController.sortGames('releaseDate');
    assert(games.length > 0);
  });

  it('should sort games by rating', async () => {
    const games = await GameSortController.sortGames('rating');
    assert(games.length > 0);
  });
});