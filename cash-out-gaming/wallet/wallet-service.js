const Wallet = require('./wallet-model');

const deposit = async (walletId, amount) => {
  const wallet = await Wallet.findById(walletId);
  wallet.balance += amount;
  await wallet.save();
  return wallet;
};

const withdraw = async (walletId, amount) => {
  const wallet = await Wallet.findById(walletId);
  if (wallet.balance < amount) {
    throw new Error('Insufficient balance');
  }
  wallet.balance -= amount;
  await wallet.save();
  return wallet;
};

const transfer = async (fromWalletId, toWalletId, amount) => {
  const fromWallet = await Wallet.findById(fromWalletId);
  const toWallet = await Wallet.findById(toWalletId);
  if (fromWallet.balance < amount) {
    throw new Error('Insufficient balance');
  }
  fromWallet.balance -= amount;
  toWallet.balance += amount;
  await fromWallet.save();
  await toWallet.save();
  return { fromWallet, toWallet };
};

module.exports = {
  deposit,
  withdraw,
  transfer,
};