const testUtils = {
    createTestUser: () => {
      return require('../models/User').create({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password