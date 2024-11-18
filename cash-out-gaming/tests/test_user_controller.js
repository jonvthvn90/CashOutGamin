const request = require('supertest');
const app = require('../app');
const UserController = require('../controllers/UserController');
const User = require('../models/User');
const assert = require('assert');
describe('User Controller', () => {
  it('should create a new user', async () => {
    const response = await request(app).post('/users').send({ name: 'New User', email: 'newuser@example.com' });
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('should update a user', async () => {
    const response = await request(app).put('/users/1').send({ name: 'Updated User' });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  describe('UserController', () => {
    it('should create a new user', async () => {
      const user = await UserController.createUser({ username: 'testuser', email: 'test@example.com' });
      assert(user._id);
    });
  
    it('should retrieve a user by id', async () => {
      const user = await UserController.getUser('1234567890');
      assert(user);
    });
  
    it('should update a user', async () => {
      const user = await UserController.updateUser('1234567890', { username: 'updatedtestuser' });
      assert(user.username === 'updatedtestuser');
    });
  
    it('should delete a user', async () => {
      await UserController.deleteUser('1234567890');
      const user = await UserController.getUser('1234567890');
      assert(!user);
    });
  });
});