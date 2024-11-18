const express = require('express');
const router = express.Router();
const walletController = require('./wallet-controller');

router.get('/', async (req, res) => {
  const wallets = await walletController.getAllWallets();
  res.send(wallets);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const wallet = await walletController.getWalletById(id);
  res.send(wallet);
});

router.post('/', async (req, res) => {
  const wallet = new Wallet(req.body);
  await walletController.createWallet(wallet);
  res.send({ message: 'Wallet created successfully' });
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const wallet = await walletController.getWalletById(id);
  wallet.balance = req.body.balance;
  await walletController.updateWallet(wallet);
  res.send({ message: 'Wallet updated successfully' });
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await walletController.deleteWallet(id);
  res.send({ message: 'Wallet deleted successfully' });
});

module.exports = router;