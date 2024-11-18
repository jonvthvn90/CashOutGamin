import mongoose from 'mongoose';

const testSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Test = mongoose.model('Test', testSchema);

export default Test;