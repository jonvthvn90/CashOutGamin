import mongoose from 'mongoose';

const restoreSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Restore = mongoose.model('Restore', restoreSchema);

export default Restore;