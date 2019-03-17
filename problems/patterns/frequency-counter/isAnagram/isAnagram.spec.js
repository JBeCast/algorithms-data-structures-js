describe('isAnagram', () => {
  const isAnagram = require('./isAnagram');

  it('should return whether the second string is an anagram of the first one', () => {
    expect(isAnagram('rat', 'tar')).toBe(true);
    expect(isAnagram('gerard', 'regard')).toBe(true);
    expect(isAnagram('regard', 'grader')).toBe(true);
    expect(isAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    expect(isAnagram('awesome', 'awesoma')).toBe(false);
    expect(isAnagram('zoo', 'ozz')).toBe(false);
    expect(isAnagram('asdfasdfasdf', 'asdfasdfasd')).toBe(false);
  });
});