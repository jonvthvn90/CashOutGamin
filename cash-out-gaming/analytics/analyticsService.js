import { Analytics } from './analytics';

const analyticsService = {
  async getAnalytics() {
    return await Analytics.find().exec();
  },

  async getAnalytic(id) {
    return await Analytics.findById(id).exec();
  },

  async createAnalytic(name, data) {
    const analyticsDoc = new Analytics({ name, data });
    return await analyticsDoc.save();
  },

  async updateAnalytic(id, name, data) {
    const analyticsDoc = await Analytics.findById(id).exec();
    analyticsDoc.name = name;
    analyticsDoc.data = data;
    return await analyticsDoc.save();
  },

  async deleteAnalytic(id) {
    return await Analytics.findByIdAndRemove(id).exec();
  },
};

export default analyticsService;