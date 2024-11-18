import mongoose from 'mongoose';

const discountSchema = new mongoose.Schema({
  amount: Number,
  expirationDate: Date,
});

const Discount = mongoose.model('Discount', discountSchema);

export default Discount;