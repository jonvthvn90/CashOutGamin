const User = require('../models/User');

async function getUsers() {
  return await User.find();
}

async function getUser(id) {
  return await User.findById(id);
}

async function createUser(user) {
  return await User.create(user);
}

async function updateUser(id, user, name, email) {
  return await User.findByIdAndUpdate(id, user, { new: true });
}

async function deleteUser(id) {
  return User.findByIdAndRemove(id);
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser
};