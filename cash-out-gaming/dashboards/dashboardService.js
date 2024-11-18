import { Dashboard } from './dashboard';

const dashboardService = {
  async getDashboards() {
    return await Dashboard.find().exec();
  },

  async getDashboard(id) {
    return await Dashboard.findById(id).exec();
  },

  async createDashboard(name, data) {
    const dashboardDoc = new Dashboard({ name, data });
    return await dashboardDoc.save();
  },

  async updateDashboard(id, name, data) {
    const dashboardDoc = await Dashboard.findById(id).exec();
    dashboardDoc.name = name;
    dashboardDoc.data = data;
    return await dashboardDoc.save();
  },

  async deleteDashboard(id) {
    return await Dashboard.findByIdAndRemove(id).exec();
  },
};

export default dashboardService;