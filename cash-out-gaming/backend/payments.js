const express = require(‘express’); 
const app = express(); 
const paypal = require(‘paypal-rest-sdk’); 
const cashapp = require(‘cashapp-pay’); 
const stripe = require(‘stripe’)(‘YOUR_STRIPE_SECRET_KEY’); 

// Set up PayPal 
paypal.configure({ 
  'mode': ‘sandbox’, 
  'client_id': ‘YOUR_PAYPAL_CLIENT_ID’, 
  'client_secret': ‘YOUR_PAYPAL_CLIENT_SECRET’ 
}); 

// Set up CashApp Pay 
cashapp.configure({ 
  'client_id': ‘YOUR_CASHAPP_CLIENT_ID’, 
  'client_secret': ‘YOUR_CASHAPP_CLIENT_SECRET’ 
}); 

// Set up Stripe 
stripe.configure({ 
  'publishable_key': ‘YOUR_STRIPE_PUBLISHABLE_KEY’, 
  'secret_key': ‘YOUR_STRIPE_SECRET_KEY’ 
}); 

// Set up payment routes 
app.post(‘/payment’, (req, res) => { 
  // Process payment 
  const payment = req.body.payment; 
  if (payment.method === ‘paypal’) { 
    // Process PayPal payment 
    paypal.payment.create({ 
      'intent': ‘sale’, 
      'payer': { 
        'payment_method': ‘paypal’ 
      }, 
      'transactions': [{ 
        'amount': { 
          'currency': ‘USD’, 
          'total': payment.amount 
        } 
      }] 
    }, (err, payment) => { 
      if (err) return res.status(400).send({ message: ‘Error processing payment’ }); 
      res.send({ message: ‘Payment processed successfully’ }); 
    }); 
  } else if (payment.method === ‘cashapp’) { 
    // Process CashApp Pay payment 
    cashapp.payment.create({ 
      'amount': payment.amount, 
      'currency': ‘USD’ 
    }, (err, payment) => { 
      if (err) return res.status(400).send({ message: ‘Error processing payment’ }); 
      res.send({ message: ‘Payment processed successfully’ }); 
    }); 
  } else if (payment.method === ‘stripe’) { 
    // Process Stripe payment 
    stripe.charges.create({ 
      'amount': payment.amount, 
      'currency': ‘USD’, 
      'source': payment.source 
    }, (err, charge) => { 
      if (err) return res.status(400).send({ message: ‘Error processing payment’ }); 
      res.send({ message: ‘Payment processed successfully’ }); 
    }); 
  } 
}); 

// Set up server 
const port = 3000; 
app.listen(port, () => { 
  console.log(`Server listening on port ${port}`); 
});