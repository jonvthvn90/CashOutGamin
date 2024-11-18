const randomUtils = {
    generateRandomNumber: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    generateRandomString: (length) => {
      return Math.random().toString(36).substr(2, length);
    },
  };
  
  module.exports = randomUtils;