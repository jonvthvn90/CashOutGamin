const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

router.post('/match', matchController.createMatch);
router.get('/matches', matchController.getMatches);
router.get('/match/:id', matchController.getMatch);

module.exports = router;