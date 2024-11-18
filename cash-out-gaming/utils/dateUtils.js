const dateUtils = {
    getCurrentDate: () => {
      return new Date();
    },
    formatDateString: (date) => {
      return date.toISOString();
    },
    addDaysToDate: (date, days) => {
      return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    },
  };
  
  module.exports = dateUtils;