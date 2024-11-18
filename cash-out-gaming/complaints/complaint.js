import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  orderId: String,
  reason: String,
  status: String,
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;