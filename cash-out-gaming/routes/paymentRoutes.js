const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/payment', paymentController.createPayment);
router.get('/payments', paymentController.getPayments);
router.get('/payment/:id', paymentController.getPayment);

module.exports = router;