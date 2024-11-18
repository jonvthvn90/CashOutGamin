import mongoose from 'mongoose';

const loggingSchema = new mongoose.Schema({
  name: String,
  logs: [{ type: String }],
});

const Logging = mongoose.model('Logging', loggingSchema);

export default Logging;