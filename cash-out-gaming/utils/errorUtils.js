const errorUtils = {
    createError: (message, status) => {
      const error = new Error(message);
      error.status = status;
      return error;
    },
    handleError: (error) => {
      console.error(error);
      return error;
    },
  };
  
  module.exports = errorUtils;