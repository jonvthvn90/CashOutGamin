const storageUtils = {
    saveData: (data) => {
      return require('fs').writeFileSync('data.json', JSON.stringify(data));
    },
    loadData: () => {
      return JSON.parse(require('fs').readFileSync('data.json'));
    },
  };
  
  module.exports = storageUtils;