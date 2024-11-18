import { Cancellation } from './cancellation';

const cancellationService = {
  async getCancellations() {
    return await Cancellation.find().exec();
  },

  async getCancellation(id) {
    return await Cancellation.findById(id).exec();
  },

  async createCancellation(orderId, reason, status) {
    const cancellationDoc = new Cancellation({ orderId, reason, status });
    return await cancellationDoc.save();
  },

  async updateCancellation(id, orderId, reason, status) {
    const cancellationDoc = await Cancellation.findById(id).exec();
    cancellationDoc.orderId = orderId;
    cancellationDoc.reason = reason;
    cancellationDoc.status = status;
    return await cancellationDoc.save();
  },

  async deleteCancellation(id) {
    return await Cancellation.findByIdAndRemove(id).exec();
  },
};

export default cancellationService;