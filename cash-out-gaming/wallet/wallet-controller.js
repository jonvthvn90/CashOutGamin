const Wallet = require('./wallet-model');

const getAllWallets = async () => {
  const wallets = await Wallet.find();
  return wallets;
};

const getWalletById = async (id) => {
  const wallet = await Wallet.findById(id);
  return wallet;
};

const createWallet = async (wallet) => {
  await wallet.save();
};

const updateWallet = async (wallet) => {
  await wallet.save();
};

const deleteWallet = async (id) => {
  await Wallet.findByIdAndRemove(id);
};

module.exports = {
  getAllWallets,
  getWalletById,
  createWallet,
  updateWallet,
  deleteWallet,
};