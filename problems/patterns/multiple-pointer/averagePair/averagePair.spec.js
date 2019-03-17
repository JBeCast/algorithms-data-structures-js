describe('averagePair', () => {
  const averagePair = require('./averagePair');

  it('should return true if any pair in the sorted array match the specified average', () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 7.1)).toBe(false);
    expect(averagePair([1, 3, 3, 5], 7)).toBe(false);
    expect(averagePair([1.1, 2, 3, 4.4, 5, 6], 2.75)).toBe(true);
    expect(averagePair([1.1, 2, 3, 4.4, 5, 6], 2.749)).toBe(false);
  });
});
