describe('countUniqueValues', () => {
  const countUniqueValues = require('./countUniqueValues');

  it('should return the number of unique values in the sorted array', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 5])).toBe(5);
    expect(countUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])).toBe(4);
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([1])).toBe(1);
    expect(countUniqueValues([1, 1])).toBe(1);
    expect(countUniqueValues([1, 2])).toBe(2);
  });
});
