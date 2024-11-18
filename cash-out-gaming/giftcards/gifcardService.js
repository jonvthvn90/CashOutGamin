import { Giftcard } from './giftcard';

const giftcardService = {
  async getGiftcards() {
    return await Giftcard.find().exec();
  },

  async getGiftcard(id) {
    return await Giftcard.findById(id).exec();
  },

  async createGiftcard(code, amount, expirationDate) {
    const giftcardDoc = new Giftcard({ code, amount, expirationDate });
    return await giftcardDoc.save();
  },

  async updateGiftcard(id, code, amount, expirationDate) {
    const giftcardDoc = await Giftcard.findById(id).exec();
    giftcardDoc.code = code;
    giftcardDoc.amount = amount;
    giftcardDoc.expirationDate = expirationDate;
    return await giftcardDoc.save();
  },

  async deleteGiftcard(id) {
    return await Giftcard.findByIdAndRemove(id).exec();
  },
};

export default giftcardService;