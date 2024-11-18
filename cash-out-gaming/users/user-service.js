const User = require('./user-model');
const utils = require('../utils/utils');

const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const isValidPassword = utils.comparePasswords(password, user.password);
  if (!isValidPassword) {
    throw new Error('Invalid email or password');
  }
  return user;
};

const generateToken = async (user) => {
  const token = utils.generateToken();
  user.token = token;
  await user.save();
  return token;
};

module.exports = {
  authenticateUser,
  generateToken,
};