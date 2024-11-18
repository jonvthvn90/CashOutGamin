const Player = require('./player-model');

const getAllPlayers = async () => {
  const players = await Player.find();
  return players;
};

const getPlayerById = async (id) => {
  const player = await Player.findById(id);
  return player;
};

const createPlayer = async (player) => {
  await player.save();
};

const updatePlayer = async (player) => {
  await player.save();
};

const deletePlayer = async (id) => {
  await Player.findByIdAndRemove(id);
};

module.exports = {
  getAllPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
};