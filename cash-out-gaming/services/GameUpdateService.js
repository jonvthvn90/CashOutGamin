const Game = require('../models/Game');

async function updateGame(id, game) {
  return await Game.findByIdAndUpdate(id, game, { new: true });
}

module.exports = {
  updateGame
};