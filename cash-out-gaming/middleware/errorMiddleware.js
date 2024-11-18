const errorMiddleware = (error, req, res, next) => {
    console.error(error);
    const { statusCode, message } = error;
    res.status(statusCode || 500).send({ error: message });
  };
  
  module.exports = errorMiddleware;