const express = require('express');
const router = express.Router();
const gameDeleteService = require('../services/GameDeleteService');

router.delete('/:id', async (req, res) => {
  const game = await gameDeleteService.deleteGame(req.params.id);
  res.send(game);
});

module.exports = router;