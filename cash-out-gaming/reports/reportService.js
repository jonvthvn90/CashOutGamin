import { Report } from './report';

const reportService = {
  async getReports() {
    return await Report.find().exec();
  },

  async getReport(id) {
    return await Report.findById(id).exec();
  },

  async createReport(name, data) {
    const reportDoc = new Report({ name, data });
    return await reportDoc.save();
  },

  async updateReport(id, name, data) {
    const reportDoc = await Report.findById(id).exec();
    reportDoc.name = name;
    reportDoc.data = data;
    return await reportDoc.save();
  },

  async deleteReport(id) {
    return await Report.findByIdAndRemove(id).exec();
  },
};

export default reportService;