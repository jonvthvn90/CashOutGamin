import { Review } from './review';

const reviewService = {
  async getReviews() {
    return await Review.find().exec();
  },

  async getReview(id) {
    return await Review.findById(id).exec();
  },

  async createReview(productId, userId, rating, comment) {
    const reviewDoc = new Review({ productId, userId, rating, comment });
    return await reviewDoc.save();
  },

  async updateReview(id, productId, userId, rating, comment) {
    const reviewDoc = await Review.findById(id).exec();
    reviewDoc.productId = productId;
    reviewDoc.userId = userId;
    reviewDoc.rating = rating;
    reviewDoc.comment = comment;
    return await reviewDoc.save();
  },

  async deleteReview(id) {
    return await Review.findByIdAndRemove(id).exec();
  },
};

export default reviewService;