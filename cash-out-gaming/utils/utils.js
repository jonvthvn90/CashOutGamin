const crypto = require('crypto');

const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

const comparePasswords = (password, hashedPassword) => {
  return hashPassword(password) === hashedPassword;
};

module.exports = {
  generateToken,
  hashPassword,
  comparePasswords,
};