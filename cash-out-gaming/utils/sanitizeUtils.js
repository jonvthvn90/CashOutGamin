const sanitizeUtils = {
    sanitizeString: (str) => {
      return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    sanitizeObject: (obj) => {
      return Object.keys(obj).reduce((acc, key) => {
        acc[key] = sanitizeUtils.sanitizeString(obj[key]);
        return acc;
      }, {});
    },
  };
  
  module.exports = sanitizeUtils;