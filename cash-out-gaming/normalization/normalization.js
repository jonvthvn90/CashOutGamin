import mongoose from 'mongoose';

const normalizationSchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});

const Normalization = mongoose.model('Normalization', normalizationSchema);

export default Normalization;