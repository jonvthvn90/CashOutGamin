const networkUtils = require('../../utils/networkUtils');

describe('networkUtils', () => {
  it('should make a GET request', async () => {
    const response = await networkUtils.makeRequest('https://example.com', 'GET');
    expect(response.status).toBe(200);
  });

  it('should make a POST request', async () => {
    const response = await networkUtils.makeRequest('https://example.com', 'POST', { foo: 'bar' });
    expect(response.status).toBe(200);
  });
});