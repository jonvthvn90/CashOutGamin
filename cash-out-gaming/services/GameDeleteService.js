const Game = require('../models/Game');

async function deleteGame(id) {
  return await Game.findByIdAndRemove(id);
}

module.exports = {
  deleteGame
};