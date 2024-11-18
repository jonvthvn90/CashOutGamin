import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  userId: String,
  productId: String,
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;