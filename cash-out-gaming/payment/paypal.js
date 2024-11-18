import paypal from 'paypal-rest-sdk';

paypal.configure({
  mode: 'sandbox',
  client_id: 'YOUR_PAYPAL_CLIENT_ID',
  client_secret: 'YOUR_PAYPAL_CLIENT_SECRET',
});

const createPayment = async (amount, currency, description) => {
  try {
    const payment = await paypal.payment.create({
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency,
          },
          description,
        },
      ],
    });

    return payment;
  } catch (error) {
    console.error(error);
  }
};

const executePayment = async (paymentId, payerId) => {
  try {
    const payment = await paypal.payment.execute({
      payment_id: paymentId,
      payer_id: payerId,
    });

    return payment;
  } catch (error) {
    console.error(error);
  }
};

export { createPayment, executePayment };