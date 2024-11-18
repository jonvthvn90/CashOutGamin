import mongoose from 'mongoose';

const exchangeSchema = new mongoose.Schema({
  orderId: String,
  reason: String,
  status: String,
});

const Exchange = mongoose.model('Exchange', exchangeSchema);

export default Exchange;