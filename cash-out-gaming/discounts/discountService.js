import { Discount } from './discount';

const discountService = {
  async getDiscounts() {
    return await Discount.find().exec();
  },

  async getDiscount(id) {
    return await Discount.findById(id).exec();
  },

  async createDiscount(amount, expirationDate) {
    const discountDoc = new Discount({ amount, expirationDate });
    return await discountDoc.save();
  },

  async updateDiscount(id, amount, expirationDate) {
    const discountDoc = await Discount.findById(id).exec();
    discountDoc.amount = amount;
    discountDoc.expirationDate = expirationDate;
    return await discountDoc.save();
  },

  async deleteDiscount(id) {
    return await Discount.findByIdAndRemove(id).exec();
  },
};

export default discountService;
``