const configUtils = {
    getConfig: () => {
      return require('../config/config');
    },
    setConfig: (config) => {
      return require('../config/config').setConfig(config);
    },
  };
  
  module.exports = configUtils;