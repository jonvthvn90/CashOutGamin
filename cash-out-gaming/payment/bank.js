import axios from 'axios';

const bankApiUrl = 'https://api.bank.com';

const createTransaction = async (amount, currency, fromAccount, toAccount) => {
  try {
    const response = await axios.post(`${bankApiUrl}/transactions`, {
      amount,
      currency,
      from_account: fromAccount,
      to_account: toAccount,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getAccountBalance = async (accountId) => {
  try {
    const response = await axios.get(`${bankApiUrl}/accounts/${accountId}/balance`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { createTransaction, getAccountBalance };