const errorUtils = require('../../utils/errorUtils');

describe('errorUtils', () => {
  it('should create an error', () => {
    const error = errorUtils.createError('Test error');
    expect(error).toBeInstanceOf(Error);
  });

  it('should handle an error', () => {
    const error = new Error('Test error');
    errorUtils.handleError(error);
  });
});