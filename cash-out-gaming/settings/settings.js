import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;