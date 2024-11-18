import mongoose from 'mongoose';

const validationSchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});

const Validation = mongoose.model('Validation', validationSchema);

export default Validation;