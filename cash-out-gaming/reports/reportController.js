import express from 'express';
import { reportService } from './reportService';

const router = express.Router();

router.get('/reports', async (req, res) => {
  const reports = await reportService.getReports();
  res.json(reports);
});

router.get('/reports/:id', async (req, res) => {
  const reportDoc = await reportService.getReport(req.params.id);
  res.json(reportDoc);
});

router.post('/reports', async (req, res) => {
  const { name, data } = req.body;
  const reportDoc = await reportService.createReport(name, data);
  res.json(reportDoc);
});

router.put('/reports/:id', async (req, res) => {
  const { name, data } = req.body;
  const reportDoc = await reportService.updateReport(req.params.id, name, data);
  res.json(reportDoc);
});

router.delete('/reports/:id', async (req, res) => {
  await reportService.deleteReport(req.params.id);
  res.json({ message: 'Report deleted successfully' });
});

export default router;