const loggerUtils = require('../../utils/loggerUtils');

describe('loggerUtils', () => {
  it('should log a message', () => {
    loggerUtils.logMessage('Test message');
  });

  it('should log an error', () => {
    const error = new Error('Test error');
    loggerUtils.logError(error);
  });
});