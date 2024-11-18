import mongoose from 'mongoose';

const labelSchema = new mongoose.Schema({
  name: String,
  color: String,
});

const Label = mongoose.model('Label', labelSchema);

export default Label;