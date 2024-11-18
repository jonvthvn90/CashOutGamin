const User = require('./user-model');
const utils = require('../utils/utils');

const getAllUsers = async () => {
  const users = await User.find();
  return users;
};

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUser = async (user) => {
  user.password = utils.hashPassword(user.password);
  await user.save();
};

const updateUser = async (user) => {
  await user.save();
};

const deleteUser = async (id) => {
  await User.findByIdAndRemove(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};