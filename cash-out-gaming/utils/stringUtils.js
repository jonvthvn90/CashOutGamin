const stringUtils = {
    trim: (str) => str.trim(),
    toUpperCase: (str) => str.toUpperCase(),
    toLowerCase: (str) => str.toLowerCase(),
    // Add more functions here...
    trimString: (str) => {
      return str.trim();
    },
    removeSpaces: (str) => {
      return str.replace(/\s+/g, '');
    },
    uppercaseFirstLetter: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  };
  };
  
  module.exports = stringUtils;