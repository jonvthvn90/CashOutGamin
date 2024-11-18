import mongoose from 'mongoose';

const storageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Storage = mongoose.model('Storage', storageSchema);

export default Storage;