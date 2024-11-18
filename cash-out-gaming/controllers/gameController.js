import { authenticate } from '../middlewares/authMiddleware';
const express = require('express');
const router = express.Router();
const Game = require('../models/Game');
const GameService = require('../services/gameService');

router.post('/', async (req, res) => {
  const { title, description, image, price, category } = req.body;
  const game = new Game({ title, description, image, price, category });
  await game.save();
  res.json(game);
});

router.get('/', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

router.get('/:id', async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

class GameController {
  async createGame(req, res) {
    const game = await GameService.createGame(req.body.name, req.user.id);
    res.status(201).json(game);
  }

  async getGames(req, res) {
    const games = await GameService.getGames();
    res.json(games);
  }

  async getGame(req, res) {
    const game = await GameService.getGame(req.params.id);
    res.json(game);
  }

  async updateGame(req, res) {
    const game = await GameService.updateGame(req.params.id, req.body.name);
    res.json(game);
  }

  async deleteGame(req, res) {
    await GameService.deleteGame(req.params.id);
    res.status(204).json({});
  }
}

module.exports = GameController;
module.exports = router;
router.get('/games', authenticate, gameController.getGames);
router.get('/games/:id', authenticate, gameController.getGame);
router.post('/games', authenticate, gameController.createGame);
router.put('/games/:id', authenticate, gameController.updateGame);
router.delete('/games/:id', authenticate, gameController.deleteGame);

export default router;