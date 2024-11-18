const Game = require('../models/Game');
const auth = require('auth');

async function authorize(game) {
  const user = await auth.authorize(game);
  return user;
}

module.exports = {
  authorize
};