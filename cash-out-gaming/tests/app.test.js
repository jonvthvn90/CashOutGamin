const assert = require('assert');
const app = require('../../app');

describe('App', () => {
  it('should render the home page', async () => {
    const response = await app.get('/');
    assert.strictEqual(response.status, 200);
  });

  // Add more tests here...
});