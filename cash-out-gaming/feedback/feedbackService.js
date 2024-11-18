import { Feedback } from './feedback';

const feedbackService = {
  async getFeedbacks() {
    return await Feedback.find().exec();
  },

  async getFeedback(id) {
    return await Feedback.findById(id).exec();
  },

  async createFeedback(orderId, rating, comment) {
    const feedbackDoc = new Feedback({ orderId, rating, comment });
    return await feedbackDoc.save();
  },

  async updateFeedback(id, orderId, rating, comment) {
    const feedbackDoc = await Feedback.findById(id).exec();
    feedbackDoc.orderId = orderId;
    feedbackDoc.rating = rating;
    feedbackDoc.comment = comment;
    return await feedbackDoc.save();
  },

  async deleteFeedback(id) {
    return await Feedback.findByIdAndRemove(id).exec();
  },
};

export default feedbackService;