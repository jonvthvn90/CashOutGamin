import { Alert } from './alert';

const alertService = {
  async getAlerts() {
    return await Alert.find().exec();
  },

  async getAlert(id) {
    return await Alert.findById(id).exec();
  },

  async createAlert(message, level) {
    const alertDoc = new Alert({ message, level });
    return await alertDoc.save();
  },

  async updateAlert(id, message, level) {
    const alertDoc = await Alert.findById(id).exec();
    alertDoc.message = message;
    alertDoc.level = level;
    return await alertDoc.save();
  },

  async deleteAlert(id) {
    return await Alert.findByIdAndRemove(id).exec();
  },
};

export default alertService;