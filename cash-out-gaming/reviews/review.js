import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  rating: Number,
  comment: String,
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;