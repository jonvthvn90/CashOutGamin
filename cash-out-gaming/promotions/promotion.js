import mongoose from 'mongoose';

const promotionSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

const Promotion = mongoose.model('Promotion', promotionSchema);

export default Promotion;