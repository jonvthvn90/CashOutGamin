const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const { verifyPayPalWebhook } = require('../utils/paypal');
const router = express.Router();

let environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
let client = new paypal.core.PayPalHttpClient(environment);

// Create a payment
router.post('/create', async (req, res) => {
    const { amount, currency } = req.body;

    let request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: { currency_code: currency || 'USD', value: amount }
        }]
    });

    try {
        const order = await client.execute(request);
        res.json({ id: order.result.id });
    } catch (error) {
        res.status(500).json({ error: 'Payment creation failed' });
    }
});

// Capture the payment
router.post('/capture/:id', async (req, res) => {
    const orderId = req.params.id;
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    try {
        const capture = await client.execute(request);
        res.json(capture.result);
    } catch (error) {
        res.status(500).json({ error: 'Payment capture failed' });
    }
});

// PayPal Webhook for asynchronous event handling
router.post('/webhook', verifyPayPalWebhook, (req, res) => {
    // Handle the event
    const event = req.body;

    // Process the event (e.g., payment capture, refunds)
    console.log('Received PayPal webhook event:', event);

    res.sendStatus(200);
});

module.exports = router;
// JavaScript Document