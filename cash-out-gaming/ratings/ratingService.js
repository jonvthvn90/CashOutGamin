import { Rating } from './rating';

const ratingService = {
  async getRatings() {
    return await Rating.find().exec();
  },

  async getRating(id) {
    return await Rating.findById(id).exec();
  },

  async createRating(productId, userId, rating) {
    const ratingDoc = new Rating({ productId, userId, rating });
    return await ratingDoc.save();
  },

  async updateRating(id, productId, userId, rating) {
    const ratingDoc = await Rating.findById(id).exec();
    ratingDoc.productId = productId;
    ratingDoc.userId = userId;
    ratingDoc.rating = rating;
    return await ratingDoc.save();
  },

  async deleteRating(id) {
    return await Rating.findByIdAndRemove(id).exec();
  },
};

export default ratingService;