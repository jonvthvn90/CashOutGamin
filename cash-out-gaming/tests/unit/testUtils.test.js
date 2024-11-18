const testUtils = require('../../utils/testUtils');

describe('testUtils', () => {
  it('should create a test user', async () => {
    const user = await testUtils.createTestUser();
    expect(user).toBeInstanceOf(Object);
  });

  it('should create a test game', async () => {
    const game = await testUtils.createTestGame();
    expect(game).toBeInstanceOf(Object);
  });
});