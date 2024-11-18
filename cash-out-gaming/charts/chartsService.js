import { Charts } from './charts';

const chartsService = {
  async getCharts() {
    return await Charts.find().exec();
  },

  async getChart(id) {
    return await Charts.findById(id).exec();
  },

  async createChart(name, data) {
    const chartDoc = new Charts({ name, data });
    return await chartDoc.save();
  },

  async updateChart(id, name, data) {
    const chartDoc = await Charts.findById(id).exec();
    chartDoc.name = name;
    chartDoc.data = data;
    return await chartDoc.save();
  },

  async deleteChart(id) {
    return await Charts.findByIdAndRemove(id).exec();
  },
};

export default chartsService;