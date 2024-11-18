import mongoose from 'mongoose';

const chartsSchema = new mongoose.Schema({
  name: String,
  data: [{ type: Number }],
});

const Charts = mongoose.model('Charts', chartsSchema);

export default Charts;