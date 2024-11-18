const express = require('express');
const router = express.Router();
const gameValidationService = require('../services/GameValidationService');

router.post('/', async (req, res) => {
  const game = await gameValidationService.validateGame(req.body);
  res.send(game);
});

module.exports = router;