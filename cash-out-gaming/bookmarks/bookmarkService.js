import { Bookmark } from './bookmark';

const bookmarkService = {
  async getBookmarks() {
    return await Bookmark.find().exec();
  },

  async getBookmark(id) {
    return await Bookmark.findById(id).exec();
  },

  async createBookmark(user, thread) {
    const bookmarkDoc = new Bookmark({ user, thread });
    return await bookmarkDoc.save();
  },

  async updateBookmark(id, user, thread) {
    const bookmarkDoc = await Bookmark.findById(id).exec();
    bookmarkDoc.user = user;
    bookmarkDoc.thread = thread;
    return await bookmarkDoc.save();
  },

  async deleteBookmark(id) {
    return await Bookmark.findByIdAndRemove(id).exec();
  },
};

export default bookmarkService;