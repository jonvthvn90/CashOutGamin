import { Article } from './article';
import { Comment } from './comment';

const blogService = {
  async getArticles() {
    return await Article.find().exec();
  },

  async getArticle(id) {
    return await Article.findById(id).exec();
  },

  async createArticle(title, content) {
    const article = new Article({ title, content });
    return await article.save();
  },

  async getComments(articleId) {
    return await Comment.find({ articleId }).exec();
  },

  async getComment(id) {
    return await Comment.findById(id).exec();
  },

  async createComment(articleId, content) {
    const comment = new Comment({ articleId, content });
    return await comment.save();
  },
};

export default blogService;