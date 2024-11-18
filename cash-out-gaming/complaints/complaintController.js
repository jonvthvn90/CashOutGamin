import express from 'express';
import { complaintService } from './complaintService';

const router = express.Router();

router.get('/complaints', async (req, res) => {
  const complaints = await complaintService.getComplaints();
  res.json(complaints);
});

router.get('/complaints/:id', async (req, res) => {
  const complaintDoc = await complaintService.getComplaint(req.params.id);
  res.json(complaintDoc);
});

router.post('/complaints', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const complaintDoc = await complaintService.createComplaint(orderId, reason, status);
  res.json(complaintDoc);
});

router.put('/complaints/:id', async (req, res) => {
  const { orderId, reason, status } = req.body;
  const complaintDoc = await complaintService.updateComplaint(req.params.id, orderId, reason, status);
  res.json(complaintDoc);
});

router.delete('/complaints/:id', async (req, res) => {
  await complaintService.deleteComplaint(req.params.id);
  res.json({ message: 'Complaint deleted successfully' });
});

export default router;