import mongoose from 'mongoose';

const backupSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

const Backup = mongoose.model('Backup', backupSchema);

export default Backup;