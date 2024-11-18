import mongoose from 'mongoose';

const configurationSchema = new mongoose.Schema({
  name: String,
  settings: [{ type: String }],
});

const Configuration = mongoose.model('Configuration', configurationSchema);

export default Configuration;