import { Complaint } from './complaint';

const complaintService = {
  async getComplaints() {
    return await Complaint.find().exec();
  },

  async getComplaint(id) {
    return await Complaint.findById(id).exec();
  },

  async createComplaint(orderId, reason, status) {
    const complaintDoc = new Complaint({ orderId, reason, status });
    return await complaintDoc.save();
  },

  async updateComplaint(id, orderId, reason, status) {
    const complaintDoc = await Complaint.findById(id).exec();
    complaintDoc.orderId = orderId;
    complaintDoc.reason = reason;
    complaintDoc.status = status;
    return await complaintDoc.save();
  },

  async deleteComplaint(id) {
    return await Complaint.findByIdAndRemove(id).exec();
  },
};

export default complaintService;