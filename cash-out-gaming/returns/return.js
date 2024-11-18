import mongoose from 'mongoose';

const returnSchema = new mongoose.Schema({
  orderId: String,
  reason: String,
  status: String,
});

const Return = mongoose.model('Return', returnSchema);

export default Return;