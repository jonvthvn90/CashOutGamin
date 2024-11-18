const express = require('express');
const router = express.Router();
const gameErrorHandlingService = require('../services/GameErrorHandlingService');

router.get('/', async (req, res) => {
  const games = await gameErrorHandlingService.handleError(req.query.error);
  res.send(games);
});

module.exports = router;