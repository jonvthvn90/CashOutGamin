const crypto = require('crypto');

// Verify the incoming PayPal webhook request
const verifyPayPalWebhook = (req, res, next) => {
    const webhookId = process.env.PAYPAL_WEBHOOK_ID; 
    const transmissionId = req.headers['paypal-transmission-id'];
    const transmissionTime = req.headers['paypal-transmission-time'];
    const transmissionSig = req.headers['paypal-transmission-sig'];
    const certUrl = req.headers['paypal-cert-url'];
    const authAlgo = req.headers['paypal-auth-algo'];

    const webhookBody = JSON.stringify(req.body);
    const expectedSig = crypto.createVerify(authAlgo)
        .update(transmissionId + transmissionTime + webhookBody)
        .verify(certUrl, transmissionSig, 'base64');

    if (expectedSig) {
        next();
    } else {
        res.status(400).send('Invalid PayPal webhook signature');
    }
};

module.exports = { verifyPayPalWebhook };
// JavaScript Document