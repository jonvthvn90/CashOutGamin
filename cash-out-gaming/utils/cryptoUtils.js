const cryptoUtils = {
    encryptString: (str) => {
      return require('crypto').createHash('sha256').update(str).digest('hex');
    },
    decryptString: (str) => {
      return require('crypto').createHash('sha256').update(str).digest('hex');
    },
  };
  
  module.exports = cryptoUtils;