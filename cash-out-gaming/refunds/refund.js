import mongoose from 'mongoose';

const refundSchema = new mongoose.Schema({
  orderId: String,
  amount: Number,
  status: String,
});

const Refund = mongoose.model('Refund', refundSchema);

export default Refund;