import mongoose from 'mongoose';

const deploymentSchema = new mongoose.Schema({
  name: String,
  version: String,
});

const Deployment = mongoose.model('Deployment', deploymentSchema);

export default Deployment;