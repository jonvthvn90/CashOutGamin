import { Loyalty } from './loyalty';

const loyaltyService = {
  async getLoyalties() {
    return await Loyalty.find().exec();
  },

  async getLoyalty(id) {
    return await Loyalty.findById(id).exec();
  },

  async createLoyalty(userId, points) {
    const loyaltyDoc = new Loyalty({ userId, points });
    return await loyaltyDoc.save();
  },

  async updateLoyalty(id, userId, points) {
    const loyaltyDoc = await Loyalty.findById(id).exec();
    loyaltyDoc.userId = userId;
    loyaltyDoc.points = points;
    return await loyaltyDoc.save();
  },

  async deleteLoyalty(id) {
    return await Loyalty.findByIdAndRemove(id).exec();
  },
};

export default loyaltyService;