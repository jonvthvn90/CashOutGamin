import mongoose from 'mongoose';

const preferencesSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const Preferences = mongoose.model('Preferences', preferencesSchema);

export default Preferences;