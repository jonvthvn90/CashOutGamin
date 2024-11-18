const mathUtils = require('../../utils/mathUtils');

describe('mathUtils', () => {
  it('should add two numbers', () => {
    const a = 2;
    const b = 3;
    const sum = mathUtils.addNumbers(a, b);
    expect(sum).toBe(5);
  });

  it('should subtract two numbers', () => {
    const a = 5;
    const b = 3;
    const difference = mathUtils.subtractNumbers(a, b);
    expect(difference).toBe(2);
  });

  it('should multiply two numbers', () => {
    const a = 4;
    const b = 5;
    const product = mathUtils.multiplyNumbers(a, b);
    expect(product).toBe(20);
  });
});