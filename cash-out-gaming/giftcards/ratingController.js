import express from 'express';
import { ratingService } from './ratingService';

const router = express.Router();

router.get('/ratings', async (req, res) => {
  const ratings = await ratingService.getRatings();
  res.json(ratings);
});

router.get('/ratings/:id', async (req, res) => {
  const ratingDoc = await ratingService.getRating(req.params.id);
  res.json(ratingDoc);
});

router.post('/ratings', async (req, res) => {
  const { productId, userId, rating } = req.body;
  const ratingDoc = await ratingService.createRating(productId, userId, rating);
  res.json(ratingDoc);
});

router.put('/ratings/:id', async (req, res) => {
  const { productId, userId, rating } = req.body;
  const ratingDoc = await ratingService.updateRating(req.params.id, productId, userId, rating);
  res.json(ratingDoc);
});

router.delete('/ratings/:id', async (req, res) => {
  await ratingService.deleteRating(req.params.id);
  res.json({ message: 'Rating deleted successfully' });
});

export default router;