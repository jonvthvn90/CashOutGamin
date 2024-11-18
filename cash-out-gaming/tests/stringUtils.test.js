const assert = require('assert');
const stringUtils = require('../../utils/stringUtils');

describe('StringUtils', () => {
  it('should trim a string', () => {
    const input = '  Hello World  ';
    const expected = 'Hello World';
    const actual = stringUtils.trim(input);
    assert.strictEqual(actual, expected);
  });

  // Add more tests here...
});