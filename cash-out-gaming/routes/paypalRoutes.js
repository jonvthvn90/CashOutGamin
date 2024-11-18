const express = require('express');
const router = express.Router();
const paypalController = require('../controllers/paypalController');

router.post('/paypal', paypalController.createPaypalPayment);
router.get('/paypal/callback', paypalController.getPaypalCallback);

module.exports = router;