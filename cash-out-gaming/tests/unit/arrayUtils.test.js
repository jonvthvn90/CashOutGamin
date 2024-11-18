const arrayUtils = require('../../utils/arrayUtils');

describe('arrayUtils', () => {
  it('should remove duplicates from an array', () => {
    const arr = [1, 2, 2, 3, 4, 4, 5];
    const noDuplicatesArr = arrayUtils.removeDuplicates(arr);
    expect(noDuplicatesArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should flatten an array', () => {
    const arr = [[1, 2], [3, 4], [5, 6]];
    const flattenedArr = arrayUtils.flattenArray(arr);
    expect(flattenedArr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should shuffle an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = arrayUtils.shuffleArray(arr);
    expect(shuffledArr).not.toEqual(arr);
  });
});