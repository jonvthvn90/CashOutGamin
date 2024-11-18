const objectUtils = {
    mergeObjects: (obj1, obj2) => {
      return { ...obj1, ...obj2 };
    },
    removeObjectProperty: (obj, prop) => {
      delete obj[prop];
      return obj;
    },
    hasOwnProperty: (obj, prop) => {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    },
  };
  
  module.exports = objectUtils;