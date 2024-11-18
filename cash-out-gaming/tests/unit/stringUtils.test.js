const stringUtils = require('../../utils/stringUtils');

describe('stringUtils', () => {
  it('should trim a string', () => {
    const str = '   hello world   ';
    const trimmedStr = stringUtils.trimString(str);
    expect(trimmedStr).toBe('hello world');
  });

  it('should remove spaces from a string', () => {
    const str = 'hello world';
    const noSpacesStr = stringUtils.removeSpaces(str);
    expect(noSpacesStr).toBe('helloworld');
  });

  it('should uppercase the first letter of a string', () => {
    const str = 'hello world';
    const uppercasedStr = stringUtils.uppercaseFirstLetter(str);
    expect(uppercasedStr).toBe('Hello world');
  });
});