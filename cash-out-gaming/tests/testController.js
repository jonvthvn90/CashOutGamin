import express from 'express';
import { testService } from './testService';

const router = express.Router();

router.get('/tests', async (req, res) => {
  const tests = await testService.getTests();
  res.json(tests);
});

router.get('/tests/:id', async (req, res) => {
  const testDoc = await testService.getTest(req.params.id);
  res.json(testDoc);
});

router.post('/tests', async (req, res) => {
  const { name, description } = req.body;
  const testDoc = await testService.createTest(name, description);
  res.json(testDoc);
});

router.put('/tests/:id', async (req, res) => {
  const { name, description } = req.body;
  const testDoc = await testService.updateTest(req.params.id, name, description);
  res.json(testDoc);
});

router.delete('/tests/:id', async (req, res) => {
  await testService.deleteTest(req.params.id);
  res.json({ message: 'Test deleted successfully' });
});

export default router;