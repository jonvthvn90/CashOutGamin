import mongoose from 'mongoose';

const metricSchema = new mongoose.Schema({
  name: String,
  value: Number,
});

const Metric = mongoose.model('Metric', metricSchema);

export default Metric;