import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerName: String,
  orderDate: Date,
  total: Number,
  status: String,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;