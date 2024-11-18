import express from 'express';
import { schedulingService } from './schedulingService';

const router = express.Router();

router.get('/backups', async (req, res) => {
  const backups = await schedulingService.getBackups();
  res.json(backups);
});

router.get('/backups/:id', async (req, res) => {
  const backupDoc = await schedulingService.getBackup(req.params.id);
  res.json(backupDoc);
});

router.post('/backups', async (req, res) => {
  const { name, data } = req.body;
  const backupDoc = await schedulingService.createBackup(name, data);
  res.json(backupDoc);
});

router.put('/backups/:id', async (req, res) => {
  const { name, data } = req.body;
  const backupDoc = await schedulingService.updateBackup(req.params.id, name, data);
  res.json(backupDoc);
});

router.delete('/backups/:id', async (req, res) => {
  await schedulingService.deleteBackup(req.params.id);
  res.json({ message: 'Backup deleted successfully' });
});

export default router;