describe('sumZero', () => {
  const sumZero = require('./sumZero');

  it('should return a pair of numbers if any in the ordered array sum zero, null otherwise', () => {
    expect(sumZero([-3, 2, 1, 0, 1, 2, 3])).toEqual([-3,3]); // [-3,3]
    expect(sumZero([-5, -2, 1, 3, 5, 7, 9])).toEqual([-5,5]); // [-5,5]
    expect(sumZero([-15, -14, -5, -2, -1, 1, 2, 3, 7, 9])).toEqual([-2,2]); // [-2,2]
    expect(sumZero([-15, -14, -5, -1, 1, 2, 3, 7, 9])).toEqual([-1,1]); // [-1,1]
    expect(sumZero([-7, -3, -2, 1, 5, 8])).toEqual(null); // null
    expect(sumZero([-13, -10, -9, 1, 5, 8])).toEqual(null); // null
    expect(sumZero([1, 2, 3, 4, 5])).toEqual(null); // null
    expect(sumZero([-1, -2, -3, -4, -5])).toEqual(null); // null
  });
});
