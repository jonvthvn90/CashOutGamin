import { Promotion } from './promotion';

const promotionService = {
  async getPromotions() {
    return await Promotion.find().exec();
  },

  async getPromotion(id) {
    return await Promotion.findById(id).exec();
  },

  async createPromotion(name, description, startDate, endDate) {
    const promotionDoc = new Promotion({ name, description, startDate, endDate });
    return await promotionDoc.save();
  },

  async updatePromotion(id, name, description, startDate, endDate) {
    const promotionDoc = await Promotion.findById(id).exec();
    promotionDoc.name = name;
    promotionDoc.description = description;
    promotionDoc.startDate = startDate;
    promotionDoc.endDate = endDate;
    return await promotionDoc.save();
  },

  async deletePromotion(id) {
    return await Promotion.findByIdAndRemove(id).exec();
  },
};

export default promotionService;