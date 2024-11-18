import { Favorite } from './favorite';

const favoriteService = {
  async getFavorites() {
    return await Favorite.find().exec();
  },

  async getFavorite(id) {
    return await Favorite.findById(id).exec();
  },

  async createFavorite(user, thread) {
    const favoriteDoc = new Favorite({ user, thread });
    return await favoriteDoc.save();
  },

  async updateFavorite(id, user, thread) {
    const favoriteDoc = await Favorite.findById(id).exec();
    favoriteDoc.user = user;
    favoriteDoc.thread = thread;
    return await favoriteDoc.save();
  },

  async deleteFavorite(id) {
    return await Favorite.findByIdAndRemove(id).exec();
  },
};

export default favoriteService;