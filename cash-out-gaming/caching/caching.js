import mongoose from 'mongoose';

const cachingSchema = new mongoose.Schema({
  name: String,
  rules: [{ type: String }],
});

const Caching = mongoose.model('Caching', cachingSchema);

export default Caching;