describe('sameDigitFrequency', () => {
  const sameDigitFrequency = require('./sameDigitFrequency');

  it('should return true if both numbers have the same frequency for each digit', () => {
    expect(sameDigitFrequency(555, 555)).toBe(true); // true
    expect(sameDigitFrequency(34, 43)).toBe(true); //true
    expect(sameDigitFrequency(2778, 8727)).toBe(true); // true
    expect(sameDigitFrequency(555, 5555)).toBe(false); // false
    expect(sameDigitFrequency(323, 32)).toBe(false); // false
    expect(sameDigitFrequency(323232, 232322)).toBe(false); // false
  });
});