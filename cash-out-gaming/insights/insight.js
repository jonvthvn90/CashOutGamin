import mongoose from 'mongoose';

const insightSchema = new mongoose.Schema({
  name: String,
  data: Object,
});

const Insight = mongoose.model('Insight', insightSchema);

export default Insight;