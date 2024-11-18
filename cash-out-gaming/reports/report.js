import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  name: String,
  data: Object,
});

const Report = mongoose.model('Report', reportSchema);

export default Report;