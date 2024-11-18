import mongoose from 'mongoose';

const queueingSchema = new mongoose.Schema({
  name: String,
  tasks: [{ type: String }],
});

const Queueing = mongoose.model('Queueing', queueingSchema);

export default Queueing;