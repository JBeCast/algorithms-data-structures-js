describe('areThereDuplicates', () => {
  const areThereDuplicates = require('./areThereDuplicates');

  it('should accept n arguments and return true if any is repeated', () => {
    expect(areThereDuplicates(5, 1, 2, 3, 4)).toBe(false);
    expect(areThereDuplicates(6, 1, 2, 3, 1)).toBe(true);
    expect(areThereDuplicates(1, 2, 3, 2, 2, 2)).toBe(true);
    expect(areThereDuplicates(1, 2, 3, 4, 5, 6, 2)).toBe(true);
    expect(areThereDuplicates('a', 2, 'b', 4)).toBe(false);
    expect(areThereDuplicates('a', 2, 'b', 'b')).toBe(true);
    expect(areThereDuplicates('a', 2, true, false)).toBe(false);
    expect(areThereDuplicates('a', 2, true, false, true)).toBe(true);
  });
});