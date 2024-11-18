import mongoose from 'mongoose';

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  expirationDate: Date,
});

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;