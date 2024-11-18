const randomUtils = require('../../utils/randomUtils');

describe('randomUtils', () => {
  it('should generate a random number', () => {
    const randomNumber = randomUtils.generateRandomNumber(1, 10);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(11);
  });

  it('should generate a random string', () => {
    const randomString = randomUtils.generateRandomString(10);
    expect(randomString).toHaveLength(10);
  });
});