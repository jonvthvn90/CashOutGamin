const Player = require('./player-model');
const bcrypt = require('bcrypt');

const registerPlayer = async (player) => {
  const hashedPassword = await bcrypt.hash(player.password, 10);
  player.password = hashedPassword;
  await player.save();
  return player;
};

const loginPlayer = async (email, password) => {
  const player = await Player.findOne({ email });
  if (!player) {
    throw new Error('Invalid email or password');
  }
  const isValidPassword = await bcrypt.compare(password, player.password);
  if (!isValidPassword) {
    throw new Error('Invalid email or password');
  }
  return player;
};

const addGameToPlayer = async (playerId, gameId) => {
  const player = await Player.findById(playerId);
  player.games.push(gameId);
  await player.save();
  return player;
};

const removeGameFromPlayer = async (playerId, gameId) => {
  const player = await Player.findById(playerId);
  const gameIndex = player.games.indexOf(gameId);
  if (gameIndex !== -1) {
    player.games.splice(gameIndex, 1);
    await player.save();
  }
  return player;
};

module.exports = {
  registerPlayer,
  loginPlayer,
  addGameToPlayer,
  removeGameFromPlayer,
};