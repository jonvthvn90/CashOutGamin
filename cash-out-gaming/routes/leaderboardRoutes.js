const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

router.post('/leaderboard', leaderboardController.createLeaderboard);
router.get('/leaderboards', leaderboardController.getLeaderboards);
router.get('/leaderboard/:id', leaderboardController.getLeaderboard);

module.exports = router;