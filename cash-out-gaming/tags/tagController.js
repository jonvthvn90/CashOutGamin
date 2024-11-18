import express from 'express';
import { tagService } from './tagService';

const router = express.Router();

router.get('/tags', async (req, res) => {
  const tags = await tagService.getTags();
  res.json(tags);
});

router.get('/tags/:id', async (req, res) => {
  const tagDoc = await tagService.getTag(req.params.id);
  res.json(tagDoc);
});

router.post('/tags', async (req, res) => {
  const { name, threads } = req.body;
  const tagDoc = await tagService.createTag(name, threads);
  res.json(tagDoc);
});

router.put('/tags/:id', async (req, res) => {
  const { name, threads } = req.body;
  const tagDoc = await tagService.updateTag(req.params.id, name, threads);
  res.json(tagDoc);
});

router.delete('/tags/:id', async (req, res) =>