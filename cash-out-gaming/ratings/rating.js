import mongoose from 'mongoose';

const ratingSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  rating: Number,
});

const Rating = mongoose.model('Rating', ratingSchema);

export default Rating;