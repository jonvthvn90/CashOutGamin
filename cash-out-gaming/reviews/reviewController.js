import express from 'express';
import { reviewService } from './reviewService';

const router = express.Router();

router.get('/reviews', async (req, res) => {
  const reviews = await reviewService.getReviews();
  res.json(reviews);
});

router.get('/reviews/:id', async (req, res) => {
  const reviewDoc = await reviewService.getReview(req.params.id);
  res.json(reviewDoc);
});

router.post('/reviews', async (req, res) => {
  const { productId, userId, rating, comment } = req.body;
  const reviewDoc = await reviewService.createReview(productId, userId, rating, comment);
  res.json(reviewDoc);
});

router.put('/reviews/:id', async (req, res) => {
  const { productId, userId, rating, comment } = req.body;
  const reviewDoc = await reviewService.updateReview(req.params.id, productId, userId, rating, comment);
  res.json(reviewDoc);
});

router.delete('/reviews/:id', async (req, res) => {
  await reviewService.deleteReview(req.params.id);
  res.json({ message: 'Review deleted successfully' });
});

export default router;