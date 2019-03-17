describe('containsAllSquares', () => {
  const containsAllSquares = require('./containsAllSquares');

  it('should return true if the second array contains all of the numbers in the first array squared', () => {
    expect(containsAllSquares([1, 2, 3], [4, 1, 9])).toBe(true);
    expect(containsAllSquares([1, 2, 3], [1, 9])).toBe(false);
    expect(containsAllSquares([1, 2, 1], [4, 1, 4])).toBe(false); // The frequency of each square should be the same
    expect(containsAllSquares([1, 2, 3, 2, 1, 5], [1, 4, 9, 4, 1, 25])).toBe(true);
  });
});
