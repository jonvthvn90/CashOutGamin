import mongoose from 'mongoose';

const sanitizationSchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});

const Sanitization = mongoose.model('Sanitization', sanitizationSchema);

export default Sanitization;