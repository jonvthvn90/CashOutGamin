const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentController');

router.post('/tournament', tournamentController.createTournament);
router.get('/tournaments', tournamentController.getTournaments);
router.get('/tournament/:id', tournamentController.getTournament);

module.exports = router;