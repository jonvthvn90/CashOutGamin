import express from 'express';
import { blogService } from './blogService';

const router = express.Router();

router.get('/articles', async (req, res) => {
  const articles = await blogService.getArticles();
  res.json(articles);
});

router.get('/articles/:id', async (req, res) => {
  const article = await blogService.getArticle(req.params.id);
  res.json(article);
});

router.post('/articles', async (req, res) => {
  const { title, content } = req.body;
  const article = await blogService.createArticle(title, content);
  res.json(article);
});

router.get('/comments/:articleId', async (req, res) => {
  const comments = await blogService.getComments(req.params.articleId);
  res.json(comments);
});

router.get('/comments/:id', async (req, res) => {
  const comment = await blogService.getComment(req.params.id);
  res.json(comment);
});

router.post('/comments', async (req, res) => {
  const { articleId, content } = req.body;
  const comment = await blogService.createComment(articleId, content);
  res.json(comment);
});

export default router;