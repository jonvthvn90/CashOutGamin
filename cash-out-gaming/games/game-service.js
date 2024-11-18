const Game = require('./game-model');

const getAllGames = async () => {
  const games = await Game.find();
  return games;
};

const getGameById = async (id) => {
  const game = await Game.findById(id);
  return game;
};

const createGame = async (game) => {
  await game.save();
};

const updateGame = async (game) => {
  await game.save();
};

const deleteGame = async (id) => {
  await Game.findByIdAndRemove(id);
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};