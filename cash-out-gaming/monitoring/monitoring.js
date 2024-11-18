import mongoose from 'mongoose';

const monitoringSchema = new mongoose.Schema({
  name: String,
  metrics: [{ type: String }],
});

const Monitoring = mongoose.model('Monitoring', monitoringSchema);

export default Monitoring;