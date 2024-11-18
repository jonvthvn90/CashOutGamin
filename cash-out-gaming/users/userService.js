import { User } from './user';

const userService = {
  async getUsers() {
    return await User.find().exec();
  },

  async getUser(id) {
    return await User.findById(id).exec();
  },

  async createUser(name, email, password) {
    const userDoc = new User({ name, email, password });
    return await userDoc.save();
  },

  async updateUser(id, name, email, password) {
    const userDoc = await User.findById(id).exec();
    userDoc.name = name;
    userDoc.email = email;
    userDoc.password = password;
    return await userDoc.save();
  },

  async deleteUser(id) {
    return await User.findByIdAndRemove(id).exec();
  },
};

export default userService;