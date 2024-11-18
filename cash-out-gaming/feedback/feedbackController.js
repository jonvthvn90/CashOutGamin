import express from 'express';
import { feedbackService } from './feedbackService';

const router = express.Router();

router.get('/feedbacks', async (req, res) => {
  const feedbacks = await feedbackService.getFeedbacks();
  res.json(feedbacks);
});

router.get('/feedbacks/:id', async (req, res) => {
  const feedbackDoc = await feedbackService.getFeedback(req.params.id);
  res.json(feedbackDoc);
});

router.post('/feedbacks', async (req, res) => {
  const { orderId, rating, comment } = req.body;
  const feedbackDoc = await feedbackService.createFeedback(orderId, rating, comment);
  res.json(feedbackDoc);
});

router.put('/feedbacks/:id', async (req, res) => {
  const { orderId, rating, comment } = req.body;
  const feedbackDoc = await feedbackService.updateFeedback(req.params.id, orderId, rating, comment);
  res.json(feedbackDoc);
});

router.delete('/feedbacks/:id', async (req, res) => {
  await feedbackService.deleteFeedback(req.params.id);
  res.json({ message: 'Feedback deleted successfully' });
});

export default router;