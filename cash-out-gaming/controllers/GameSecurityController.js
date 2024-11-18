const express = require('express');
const router = express.Router();
const gameSecurityService = require('../services/GameSecurityService');

router.get('/', async (req, res) => {
  const games = await gameSecurityService.secureGames(req.query.secure);
  res.send(games);
});

module.exports = router;