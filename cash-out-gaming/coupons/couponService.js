import { Coupon } from './coupon';

const couponService = {
  async getCoupons() {
    return await Coupon.find().exec();
  },

  async getCoupon(id) {
    return await Coupon.findById(id).exec();
  },

  async createCoupon(code, discount, expirationDate) {
    const couponDoc = new Coupon({ code, discount, expirationDate });
    return await couponDoc.save();
  },

  async updateCoupon(id, code, discount, expirationDate) {
    const couponDoc = await Coupon.findById(id).exec();
    couponDoc.code = code;
    couponDoc.discount = discount;
    couponDoc.expirationDate = expirationDate;
    return await couponDoc.save();
  },

  async deleteCoupon(id) {
    return await Coupon.findByIdAndRemove(id).exec();
  },
};

export default couponService;