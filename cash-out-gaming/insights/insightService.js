import { Insight } from './insight';

const insightService = {
  async getInsights() {
    return await Insight.find().exec();
  },

  async getInsight(id) {
    return await Insight.findById(id).exec();
  },

  async createInsight(name, data) {
    const insightDoc = new Insight({ name, data });
    return await insightDoc.save();
  },

  async updateInsight(id, name, data) {
    const insightDoc = await Insight.findById(id).exec();
    insightDoc.name = name;
    insightDoc.data = data;
    return await insightDoc.save();
  },

  async deleteInsight(id) {
    return await Insight.findByIdAndRemove(id).exec();
  },
};

export default insightService;