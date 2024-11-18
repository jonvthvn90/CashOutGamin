import { Cookie } from './cookie';

const cookieService = {
  async getCookies() {
    return await Cookie.find().exec();
  },

  async getCookie(id) {
    return await Cookie.findById(id).exec();
  },

  async createCookie(name, value) {
    const cookieDoc = new Cookie({ name, value });
    return await cookieDoc.save();
  },

  async updateCookie(id, name, value) {
    const cookieDoc = await Cookie.findById(id).exec();
    cookieDoc.name = name;
    cookieDoc.value = value;
    return await cookieDoc.save();
  },

  async deleteCookie(id) {
    return await Cookie.findByIdAndRemove(id).exec();
  },
};

export default cookieService;