import express from 'express';
import { tokenService } from './tokenService';

const router = express.Router();

router.get('/tokens', async (req, res) => {
  const tokens = await tokenService.getTokens();
  res.json(tokens);
});

router.get('/tokens/:id', async (req, res) => {
  const tokenDoc = await tokenService.getToken(req.params.id);
  res.json(tokenDoc);
});

router.post('/tokens', async (req, res) => {
  const { token, user } = req.body;
  const tokenDoc = await tokenService.createToken(token, user);
  res.json(tokenDoc);
});

router.put('/tokens/:id', async (req, res) => {
  const { token, user } = req.body;
  const tokenDoc = await tokenService.updateToken(req.params.id, token, user);
  res.json(tokenDoc);
});

router.delete('/tokens/:id', async (req, res) => {
  await tokenService.deleteToken(req.params.id);
  res.json({ message: 'Token deleted successfully' });
});

export default router;