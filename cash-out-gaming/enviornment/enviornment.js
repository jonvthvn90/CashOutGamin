import mongoose from 'mongoose';

const environmentSchema = new mongoose.Schema({
  name: String,
  variables: [{ type: String }],
});

const Environment = mongoose.model('Environment', environmentSchema);

export default Environment;