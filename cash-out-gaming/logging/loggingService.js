import { Logging } from './logging';

const loggingService = {
  async getLoggings() {
    return await Logging.find().exec();
  },

  async getLogging(id) {
    return await Logging.findById(id).exec();
  },

  async createLogging(name, logs) {
    const loggingDoc = new Logging({ name, logs });
    return await loggingDoc.save();
  },

  async updateLogging(id, name, logs) {
    const loggingDoc = await Logging.findById(id).exec();
    loggingDoc.name = name;
    loggingDoc.logs = logs;
    return await loggingDoc.save();
  },

  async deleteLogging(id) {
    return await Logging.findByIdAndRemove(id).exec();
  },
};

export default loggingService;