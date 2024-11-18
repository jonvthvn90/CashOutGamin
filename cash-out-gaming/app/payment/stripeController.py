import stripe
const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const cashAppPayController = require('./cashAppPayController');
const paypalController = require('./paypalController');
class stripeController:
    def createPayment(amount, currency):
        # Stripe logic here
        pass