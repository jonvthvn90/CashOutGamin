const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.post('/game', gameController.createGame);
router.get('/games', gameController.getGames);
router.get('/game/:id', gameController.getGame);
router.post('/', GameController.createGame);
router.get('/', GameController.getGames);
router.get('/:id', GameController.getGame);
router.put('/:id', GameController.updateGame);
router.delete('/:id', GameController.deleteGame);

module.exports = router;