const Game = require('../models/Game');
const Player = require('../models/Player');

const gameLogic = {
  async startGame(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const players = await Player.find({ gameId: gameId });
    if (players.length < 2) return { error: 'Not enough players' };
    game.status = 'in_progress';
    await game.save();
    return { message: 'Game started successfully' };
  },
  async endGame(gameId) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    game.status = 'ended';
    await game.save();
    return { message: 'Game ended successfully' };
  },
  async updateGameScore(gameId, playerId, score) {
    const game = await Game.findById(gameId);
    if (!game) return { error: 'Game not found' };
    const player = await Player.findById(playerId);
    if (!player) return { error: 'Player not found' };
    player.score = score;
    await player.save();
    return { message: 'Game score updated successfully' };
  },
};

module.exports = gameLogic;