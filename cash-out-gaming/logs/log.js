import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  message: String,
  level: String,
});

const Log = mongoose.model('Log', logSchema);

export default Log;