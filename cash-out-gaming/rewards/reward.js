import mongoose from 'mongoose';

const rewardSchema = new mongoose.Schema({
  name: String,
  description: String,
  points: Number,
});

const Reward = mongoose.model('Reward', rewardSchema);

export default Reward;