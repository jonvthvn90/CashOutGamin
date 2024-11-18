const Game = require('../models/Game');

async function paginateGames(page, limit) {
  return await Game.find().skip(page * limit).limit(limit);
}

module.exports = {
  paginateGames
};