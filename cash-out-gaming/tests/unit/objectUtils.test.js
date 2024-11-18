const objectUtils = require('../../utils/objectUtils');

describe('objectUtils', () => {
  it('should merge two objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const mergedObj = objectUtils.mergeObjects(obj1, obj2);
    expect(mergedObj).toEqual({ a: 1, b: 2, c: 3, d: 4 });
  });

  it('should remove a property from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const removedPropObj = objectUtils.removeObjectProperty(obj, 'b');
    expect(removedPropObj).toEqual({ a: 1, c: 3 });
  });

  it('should check if an object has a property', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const hasProp = objectUtils.hasOwnProperty(obj, 'b');
    expect(hasProp).toBe(true);
  });
});