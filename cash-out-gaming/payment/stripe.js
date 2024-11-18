import Stripe from 'stripe';

const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY', {
  apiVersion: '2022-08-01',
});

const chargeCard = async (amount, currency, cardNumber, expMonth, expYear, cvc) => {
  try {
    const token = await stripe.tokens.create({
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc,
      },
    });

    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token.id,
      description: 'Test Charge',
    });

    return charge;
  } catch (error) {
    console.error(error);
  }
};

const createCustomer = async (email, paymentMethod) => {
  try {
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethod,
      invoice_settings: {
        default_payment_method: paymentMethod,
      },
    });

    return customer;
  } catch (error) {
    console.error(error);
  }
};

const createSubscription = async (customerId, priceId) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: priceId,
        },
      ],
      payment_settings: {
        payment_method_types: ['card'],
      },
    });

    return subscription;
  } catch (error) {
    console.error(error);
  }
};

export { chargeCard, createCustomer, createSubscription };