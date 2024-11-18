const networkUtils = {
    makeRequest: (url, method, data) => {
      return require('axios')[method](url, data);
    },
  };
  
  module.exports = networkUtils;