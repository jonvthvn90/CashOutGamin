import { Refund } from './refund';

const refundService = {
  async getRefunds() {
    return await Refund.find().exec();
  },

  async getRefund(id) {
    return await Refund.findById(id).exec();
  },

  async createRefund(orderId, amount, status) {
    const refundDoc = new Refund({ orderId, amount, status });
    return await refundDoc.save();
  },

  async updateRefund(id, orderId, amount, status) {
    const refundDoc = await Refund.findById(id).exec();
    refundDoc.orderId = orderId;
    refundDoc.amount = amount;
    refundDoc.status = status;
    return await refundDoc.save();
  },

  async deleteRefund(id) {
    return await Refund.findByIdAndRemove(id).exec();
  },
};

export default refundService;