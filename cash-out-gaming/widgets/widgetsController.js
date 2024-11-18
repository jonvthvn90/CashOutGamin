import express from 'express';
import { widgetsService } from './widgetsService';

const router = express.Router();

router.get('/widgets', async (req, res) => {
  const widgets = await widgetsService.getWidgets();
  res.json(widgets);
});

router.get('/widgets/:id', async (req, res) => {
  const widgetDoc = await widgetsService.getWidget(req.params.id);
  res.json(widgetDoc);
});

router.post('/widgets', async (req, res) => {
  const { name, type, data } = req.body;
  const widgetDoc = await widgetsService.createWidget(name, type, data);
  res.json(widgetDoc);
});

router.put('/widgets/:id', async (req, res) => {
  const { name, type, data } = req.body;
  const widgetDoc = await widgetsService.updateWidget(req.params.id, name, type, data);
  res.json(widgetDoc);
});

router.delete('/widgets/:id', async (req, res) => {
  await widgetsService.deleteWidget(req.params.id);
  res.json({ message: 'Widget deleted successfully' });
});

export default router;