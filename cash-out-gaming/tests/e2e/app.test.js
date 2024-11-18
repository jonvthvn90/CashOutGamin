const request = require('supertest');
const app = require('../../app');

describe('App', () => {
  it('should render the home page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should render the game page', async () => {
    const response = await request(app).get('/game');
    expect(response.status).toBe(200);
  });

  it('should render the user page', async () => {
    const response = await request(app).get('/user');
    expect(response.status).toBe(200);
  });
});