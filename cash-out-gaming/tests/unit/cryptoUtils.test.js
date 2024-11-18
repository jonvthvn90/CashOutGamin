const cryptoUtils = require('../../utils/cryptoUtils');

describe('cryptoUtils', () => {
  it('should encrypt a string', () => {
    const str = 'Hello World';
    const encryptedStr = cryptoUtils.encryptString(str);
    expect(encryptedStr).not.toBe(str);
  });

  it('should decrypt a string', () => {
    const str = 'Hello World';
    const encryptedStr = cryptoUtils.encryptString(str);
    const decryptedStr = cryptoUtils.decryptString(encryptedStr);
    expect(decryptedStr).toBe(str);
  });
});