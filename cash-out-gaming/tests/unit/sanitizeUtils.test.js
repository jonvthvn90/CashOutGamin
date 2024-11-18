const sanitizeUtils = require('../../utils/sanitizeUtils');

describe('sanitizeUtils', () => {
  it('should sanitize a string', () => {
    const str = '<script>alert("XSS")</script>';
    const sanitizedStr = sanitizeUtils.sanitizeString(str);
    expect(sanitizedStr).not.toContain('<script>');
  });

  it('should sanitize an object', () => {
    const obj = { a: '<script>alert("XSS")</script>' };
    const sanitizedObj = sanitizeUtils.sanitizeObject(obj);
    expect(sanitizedObj.a).not.toContain('<script>');
  });
});