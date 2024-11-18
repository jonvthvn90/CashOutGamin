import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  message: String,
  level: String,
});

const Alert = mongoose.model('Alert', alertSchema);

export default Alert;