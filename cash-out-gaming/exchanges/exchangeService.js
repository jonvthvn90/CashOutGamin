import { Exchange } from './exchange';

const exchangeService = {
  async getExchanges() {
    return await Exchange.find().exec();
  },

  async getExchange(id) {
    return await Exchange.findById(id).exec();
  },

  async createExchange(orderId, reason, status) {
    const exchangeDoc = new Exchange({ orderId, reason, status });
    return await exchangeDoc.save();
  },

  async updateExchange(id, orderId, reason, status) {
    const exchangeDoc = await Exchange.findById(id).exec();
    exchangeDoc.orderId = orderId;
    exchangeDoc.reason = reason;
    exchangeDoc.status = status;
    return await exchangeDoc.save();
  },

  async deleteExchange(id) {
    return await Exchange.findByIdAndRemove(id).exec();
  },
};

export default exchangeService;