const reverse = require('..');

describe('7-reverse-integer', () => {
  it('123', () => {
    expect(reverse(123)).toBe(321);
  });

  it('负数', () => {
    expect(reverse(-123)).toBe(-321);
  });

  it('首位为零', () => {
    expect(reverse(120)).toBe(21);
  });

  it('超出范围', () => {
    expect(reverse(2147483647)).toBe(0);
  });

  it('负数超出范围', () => {
    expect(reverse(-2147483648)).toBe(0);
  });
});
