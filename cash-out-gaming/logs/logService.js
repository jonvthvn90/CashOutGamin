import { Log } from './log';

const logService = {
  async getLogs() {
    return await Log.find().exec();
  },

  async getLog(id) {
    return await Log.findById(id).exec();
  },

  async createLog(message, level) {
    const logDoc = new Log({ message, level });
    return await logDoc.save();
  },

  async updateLog(id, message, level) {
    const logDoc = await Log.findById(id).exec();
    logDoc.message = message;
    logDoc.level = level;
    return await logDoc.save();
  },

  async deleteLog(id) {
    return await Log.findByIdAndRemove(id).exec();
  },
};

export default logService;