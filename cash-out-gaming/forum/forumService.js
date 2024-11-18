import { Post } from './post';
import { Topic } from './topic';

const forumService = {
  async getTopics() {
    return await Topic.find().exec();
  },

  async getTopic(id) {
    return await Topic.findById(id).exec();
  },

  async createTopic(title, description) {
    const topic = new Topic({ title, description });
    return await topic.save();
  },

  async getPosts(topicId) {
    return await Post.find({ topicId }).exec();
  },

  async getPost(id) {
    return await Post.findById(id).exec();
  },

  async createPost(topicId, title, content) {
    const post = new Post({ topicId, title, content });
    return await post.save();
  },
};

export default forumService;