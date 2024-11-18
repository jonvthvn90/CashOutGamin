import { Like } from './like';

const likeService = {
  async getLikes() {
    return await Like.find().exec();
  },

  async getLike(id) {
    return await Like.findById(id).exec();
  },

  async createLike(user, thread) {
    const likeDoc = new Like({ user, thread });
    return await likeDoc.save();
 