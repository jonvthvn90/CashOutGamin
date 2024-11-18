import express from 'express';
import { forumService } from './forumService';

const router = express.Router();

router.get('/topics', async (req, res) => {
  const topics = await forumService.getTopics();
  res.json(topics);
});

router.get('/topics/:id', async (req, res) => {
  const topic = await forumService.getTopic(req.params.id);
  res.json(topic);
});

router.post('/topics', async (req, res) => {
  const { title, description } = req.body;
  const topic = await forumService.createTopic(title, description);
  res.json(topic);
});

router.get('/posts/:topicId', async (req, res) => {
  const posts = await forumService.getPosts(req.params.topicId);
  res.json(posts);
});

router.get('/posts/:id', async (req, res) => {
  const post = await forumService.getPost(req.params.id);
  res.json(post);
});

router.post('/posts', async (req, res) => {
  const { topicId, title, content } = req.body;
  const post = await forumService.createPost(topicId, title, content);
  res.json(post);
});

export default router;