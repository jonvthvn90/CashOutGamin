import { Wishlist } from './wishlist';

const wishlistService = {
  async getWishlists() {
    return await Wishlist.find().exec();
  },

  async getWishlist(id) {
    return await Wishlist.findById(id).exec();
  },

  async createWishlist(userId, productId) {
    const wishlistDoc = new Wishlist({ userId, productId });
    return await wishlistDoc.save();
  },

  async updateWishlist(id, userId, productId) {
    const wishlistDoc = await Wishlist.findById(id).exec();
    wishlistDoc.userId = userId;
    wishlistDoc.productId = productId;
    return await wishlistDoc.save();
  },

  async deleteWishlist(id) {
    return await Wishlist.findByIdAndRemove(id).exec();
  },
};

export default wishlistService;