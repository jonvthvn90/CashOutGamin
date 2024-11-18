import express from 'express';
import { giftcardService } from './giftcardService';

const router = express.Router();

router.get('/giftcards', async (req, res) => {
  const giftcards = await giftcardService.getGiftcards();
  res.json(giftcards);
});

router.get('/giftcards/:id', async (req, res) => {
  const giftcardDoc = await giftcardService.getGiftcard(req.params.id);
  res.json(giftcardDoc);
});

router.post('/giftcards', async (req, res) => {
  const { code, amount, expirationDate } = req.body;
  const giftcardDoc = await giftcardService.createGiftcard(code, amount, expirationDate);
  res.json(giftcardDoc);
});

router.put('/giftcards/:id', async (req, res) => {
  const { code, amount, expirationDate } = req.body;
  const giftcardDoc = await giftcardService.updateGiftcard(req.params.id, code, amount, expirationDate);
  res.json(giftcardDoc);
});

router.delete('/giftcards/:id', async (req, res) => {
  await giftcardService.deleteGiftcard(req.params.id);
  res.json({ message: 'Giftcard deleted successfully' });
});

export default router;