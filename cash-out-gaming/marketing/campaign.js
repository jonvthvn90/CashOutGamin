import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  budget: Number,
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;