const express = require('express');
const router = express.Router();
const Game = require('./game-model');
const gameService = require('./game-service');

const getAllGames = async (req, res) => {
  const games = await gameService.getAllGames();
  res.send(games);
};

const getGameById = async (req, res) => {
  const id = req.params.id;
  const game = await gameService.getGameById(id);
  res.send(game);
};

const createGame = async (req, res) => {
  const game = new Game(req.body);
  await gameService.createGame(game);
  res.send({ message: 'Game created successfully' });
};

const updateGame = async (req, res) => {
  const id = req.params.id;
  const game = await gameService.getGameById(id);
  game.name = req.body.name;
  game.description = req.body.description;
  game.players = req.body.players;
  game.duration = req.body.duration;
  await gameService.updateGame(game);
  res.send({ message: 'Game updated successfully' });
};

const deleteGame = async (req, res) => {
  const id = req.params.id;
  await gameService.deleteGame(id);
  res.send({ message: 'Game deleted successfully' });
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};