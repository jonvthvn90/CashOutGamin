const request = require('supertest');
const app = require('../app');
const User = require('../models/User');
const assert = require('assert');


describe('User API', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should return a single user', async () => {
    const response = await request(app).get('/users/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });

  describe('User model', () => {
    it('should create a new user', async () => {
      const user = new User({ username: 'testuser', email: 'test@example.com' });
      await user.save();
      assert(user._id);
    });
  
    it('should retrieve a user by id', async () => {
      const user = await User.findById('1234567890');
      assert(user);
    });
  
    it('should update a user', async () => {
      const user = await User.findById('1234567890');
      user.username = 'updatedtestuser';
      await user.save();
      assert(user.username === 'updatedtestuser');
    });
  
    it('should delete a user', async () => {
      await User.findByIdAndRemove('1234567890');
      const user = await User.findById('1234567890');
      assert(!user);
    });
  });

});