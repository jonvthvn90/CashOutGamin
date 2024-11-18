const Game = require('../models/Game');
const auth = require('auth');

async function login(game) {
  const user = await auth.login(game);
  return user;
}

async function register(game) {
  const user = await auth.register(game);
  return user;
}

module.exports = {
  login,
  register
};