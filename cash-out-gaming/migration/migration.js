import mongoose from 'mongoose';

const migrationSchema = new mongoose.Schema({
  name: String,
  version: String,
});

const Migration = mongoose.model('Migration', migrationSchema);

export default Migration;