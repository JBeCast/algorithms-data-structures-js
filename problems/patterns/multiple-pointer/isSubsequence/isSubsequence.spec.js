describe('isSubsequence', () => {
  const isSubsequence = require('./isSubsequence');

  it('should return true if the string contains the chars in substring in order', () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true);
    expect(isSubsequence('sing', 'sting')).toBe(true);
    expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    expect(isSubsequence('abcdb', 'abracadabra')).toBe(true);
    expect(isSubsequence('abc', 'acb')).toBe(false); // order matters
    expect(isSubsequence('abcdbrr', 'abracadabra')).toBe(false);
  });
});
