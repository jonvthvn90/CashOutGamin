import { Return } from './return';

const returnService = {
  async getReturns() {
    return await Return.find().exec();
  },

  async getReturn(id) {
    return await Return.findById(id).exec();
  },

  async createReturn(orderId, reason, status) {
    const returnDoc = new Return({ orderId, reason, status });
    return await returnDoc.save();
  },

  async updateReturn(id, orderId, reason, status) {
    const returnDoc = await Return.findById(id).exec();
    returnDoc.orderId = orderId;
    returnDoc.reason = reason;
    returnDoc.status = status;
    return await returnDoc.save();
  },

  async deleteReturn(id) {
    return await Return.findByIdAndRemove(id).exec();
  },
};

export default returnService;