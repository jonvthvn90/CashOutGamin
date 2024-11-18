const assert = require('assert');
const GameService = require('../../services/GameService');
const UserService = require('../../services/UserService');

describe('GameService', () => {
  it('should create a new game', async () => {
    const user = await UserService.createUser('John Doe', 'john.doe@example.com');
    const game = await GameService.createGame('My Game', user.id);
    assert.strictEqual(game.name, 'My Game');
  });

  // Add more tests here...
});