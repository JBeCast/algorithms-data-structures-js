describe('maxSubarraySum', () => {
  const maxSubarraySum = require('./maxSubarraySum');

  it('should return the maximum sum of n consecutive numbers in the array', () => {
    expect(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 3)).toBe(17);
    expect(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 4)).toBe(20);
    expect(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], 1)).toBe(9);
    expect(maxSubarraySum([5, 3, 9, 3, 2, 13, 15], 1)).toBe(15);
    expect(maxSubarraySum([5, 3, 9, 3, 2, 13, 15], 2)).toBe(28);
    expect(maxSubarraySum([1, 2, 3], 3)).toBe(6);
    expect(maxSubarraySum([1, 2], 3)).toBe(null);
    expect(maxSubarraySum([], 2)).toBe(null);
    expect(maxSubarraySum([1, 2, 5, 3, 9, 3, 2], -1)).toBe(null);
  });
});
