const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/access.log', level: 'info' }),
  ],
});
const loggerUtils = {
  logMessage: (message) => {
    console.log(message);
  },
  logError: (error) => {
    console.error(error);
  },
};

module.exports = loggerUtils;
module.exports = logger;