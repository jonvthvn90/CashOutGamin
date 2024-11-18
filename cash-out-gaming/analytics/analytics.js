import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  name: String,
  data: Object,
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

export default Analytics;