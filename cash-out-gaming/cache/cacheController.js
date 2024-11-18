import express from 'express';
import { cacheService } from './cacheService';

const router = express.Router();

router.get('/cache', async (req, res) => {
  const cache = await cacheService.getCache();
  res.json(cache);
});

router.get('/cache/:key', async (req, res) => {
  const cacheItem = await cacheService.getCacheItem(req.params.key);
  res.json(cacheItem);
});

router.post('/cache', async (req, res) => {
  const { key, value } = req.body;
  const cacheItem = await cacheService.createCacheItem(key, value);
  res.json(cacheItem);
});

router.put('/cache/:key', async (req, res) => {
  const { value } = req.body;
  const cacheItem = await cacheService.updateCacheItem(req.params.key, value);
  res.json(cacheItem);
});

router.delete('/cache/:key', async (req, res) => {
  await cacheService.deleteCacheItem(req.params.key);
  res.json({ message: 'Cache item deleted successfully' });
});

export default router;