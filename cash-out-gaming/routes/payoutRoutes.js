const express = require('express');
const router = express.Router();
const payoutController = require('../controllers/payoutController');

router.post('/', payoutController.createPayout);
router.get('/', payoutController.getPayouts);
router.get('/:id', payoutController.getPayout);
router.put('/:id', payoutController.updatePayout);
router.delete('/:id', payoutController.deletePayout);

module.exports = router;