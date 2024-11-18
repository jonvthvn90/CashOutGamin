const Game = require('../models/Game');
const sanitizer = require('sanitizer');

async function sanitizeGame(game) {
  game.title = sanitizer.escape(game.title);
  game.description = sanitizer.escape(game.description);
  return game;
}

module.exports = {
  sanitizeGame
};