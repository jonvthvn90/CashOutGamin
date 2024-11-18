const Payment = require('./payment-model');

const getAllPayments = async () => {
  const payments = await Payment.find();
  return payments;
};

const getPaymentById = async (id) => {
  const payment = await Payment.findById(id);
  return payment;
};

const createPayment = async (payment) => {
  await payment.save();
};

const updatePayment = async (payment) => {
  await payment.save();
};

const deletePayment = async (id) => {
  await Payment.findByIdAndRemove(id);
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};