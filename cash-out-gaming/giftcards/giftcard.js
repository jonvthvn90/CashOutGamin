import mongoose from 'mongoose';

const giftcardSchema = new mongoose.Schema({
  code: String,
  amount: Number,
  expirationDate: Date,
});

const Giftcard = mongoose.model('Giftcard', giftcardSchema);

export default Giftcard;