const express = require('express');
const router = express.Router();
const gameUpdateService = require('../services/GameUpdateService');

router.put('/:id', async (req, res) => {
  const game = await gameUpdateService.updateGame(req.params.id, req.body);
  res.send(game);
});

module.exports = router;