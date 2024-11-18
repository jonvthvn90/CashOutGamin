import mongoose from 'mongoose';

const loyaltySchema = new mongoose.Schema({
  userId: String,
  points: Number,
});

const Loyalty = mongoose.model('Loyalty', loyaltySchema);

export default Loyalty;