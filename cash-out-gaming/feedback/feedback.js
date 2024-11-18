import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  orderId: String,
  rating: Number,
  comment: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;