const validationUtils = require('../../utils/validationUtils');

describe('validationUtils', () => {
  it('should validate an email', () => {
    const email = 'test@example.com';
    const isValidEmail = validationUtils.validateEmail(email);
    expect(isValidEmail).toBe(true);
  });

  it('should validate a password', () => {
    const password = 'password123';
    const isValidPassword = validationUtils.validatePassword(password);
    expect(isValidPassword).toBe(true);
  });
});