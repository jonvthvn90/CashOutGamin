import { Monitoring } from './monitoring';

const monitoringService = {
  async getMonitorings() {
    return await Monitoring.find().exec();
  },

  async getMonitoring(id) {
    return await Monitoring.findById(id).exec();
  },

  async createMonitoring(name, metrics) {
    const monitoringDoc = new Monitoring({ name, metrics });
    return await monitoringDoc.save();
  },

  async updateMonitoring(id, name, metrics) {
    const monitoringDoc = await Monitoring.findById(id).exec();
    monitoringDoc.name = name;
    monitoringDoc.metrics = metrics;
    return await monitoringDoc.save();
  },

  async deleteMonitoring(id) {
    return await Monitoring.findByIdAndRemove(id).exec();
  },
};

export default monitoringService;