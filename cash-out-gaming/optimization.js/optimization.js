import mongoose from 'mongoose';

const optimizationSchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});

const Optimization = mongoose.model('Optimization', optimizationSchema);

export default Optimization;