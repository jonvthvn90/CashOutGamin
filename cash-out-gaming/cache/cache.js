import mongoose from 'mongoose';

const cacheSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const Cache = mongoose.model('Cache', cacheSchema);

export default Cache;