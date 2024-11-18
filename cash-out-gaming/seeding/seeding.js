import mongoose from 'mongoose';

const seedingSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Seeding = mongoose.model('Seeding', seedingSchema);

export default Seeding;