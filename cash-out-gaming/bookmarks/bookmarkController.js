import express from 'express';
import { bookmarkService } from './bookmarkService';

const router = express.Router();

router.get('/bookmarks', async (req, res) => {
  const bookmarks = await bookmarkService.getBookmarks();
  res.json(bookmarks);
});

router.get('/bookmarks/:id', async (req, res) => {
  const bookmarkDoc = await bookmarkService.getBookmark(req.params.id);
  res.json(bookmarkDoc);
});

router.post('/bookmarks', async (req, res) => {
  const { user, thread } = req.body;
  const bookmarkDoc = await bookmarkService.createBookmark(user, thread);
  res.json(bookmarkDoc);
});

router.put('/bookmarks/:id', async (req, res) => {
  const { user, thread } = req.body;
  const bookmarkDoc = await bookmarkService.updateBookmark(req.params.id, user, thread);
  res.json(bookmarkDoc);
});

router.delete('/bookmarks/:id', async (req, res) => {
  await bookmarkService.deleteBookmark(req.params.id);
  res.json({ message: 'Bookmark deleted successfully' });
});

export default router;