const arrayUtils = {
    removeDuplicates: (arr) => {
      return [...new Set(arr)];
    },
    flattenArray: (arr) => {
      return arr.flat();
    },
    shuffleArray: (arr) => {
      return arr.sort(() => Math.random() - 0.5);
    },
  };
  
  module.exports = arrayUtils;