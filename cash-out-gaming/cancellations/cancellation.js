import mongoose from 'mongoose';

const cancellationSchema = new mongoose.Schema({
  orderId: String,
  reason: String,
  status: String,
});

const Cancellation = mongoose.model('Cancellation', cancellationSchema);

export default Cancellation;