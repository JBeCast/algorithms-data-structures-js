describe('charCount', () => {
  const charCount = require('./charCount');

  it('should return an object with the frequency count of each char in a string', () => {
    const ada = charCount('Adamantium');
    expect(ada.a).toBe(3);
    expect(ada.d).toBe(1);
    expect(ada.m).toBe(2);
    expect(ada.n).toBe(1);
    expect(ada.t).toBe(1);
    expect(ada.u).toBe(1);
    
    const abc = charCount('abc123,ABC123.Abc123;aBc123');
    console.log('ABC', abc);
    expect(abc.a).toBe(4);
    expect(abc.b).toBe(4);
    expect(abc.c).toBe(4);
    expect(abc[1]).toBe(4);
    expect(abc[2]).toBe(4);
    expect(abc[3]).toBe(4);
    expect(abc[',']).toBe(undefined);
    expect(abc['.']).toBe(undefined);
    expect(abc[';']).toBe(undefined);
  });
});
