const Payment = require('./payment-model');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const processPayment = async (payment) => {
  try {
    const charge = await stripe.charges.create({
      amount: payment.amount,
      currency: 'usd',
      source: payment.method,
      description: 'Test payment',
    });
    payment.status = 'paid';
    await payment.save();
    return payment;
  } catch (error) {
    payment.status = 'failed';
    await payment.save();
    throw error;
  }
};

const refundPayment = async (payment) => {
  try {
    const refund = await stripe.refunds.create({
      charge: payment.chargeId,
      amount: payment.amount,
    });
    payment.status = 'refunded';
    await payment.save();
    return payment;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  processPayment,
  refundPayment,
};