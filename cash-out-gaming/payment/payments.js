const express = require('express');
const router = express.Router();
const paymentController = require('./payment-controller');

router.get('/', async (req, res) => {
  const payments = await paymentController.getAllPayments();
  res.send(payments);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const payment = await paymentController.getPaymentById(id);
  res.send(payment);
});

router.post('/', async (req, res) => {
  const payment = new Payment(req.body);
  await paymentController.createPayment(payment);
  res.send({ message: 'Payment created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const payment = await paymentController.getPaymentById(id);
  payment.amount = req.body.amount;
  payment.method = req.body.method;
  await paymentController.updatePayment(payment);
  res.send({ message: 'Payment updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await paymentController.deletePayment(id);
  res.send({ message: 'Payment deleted successfully' });
});

module.exports = router;