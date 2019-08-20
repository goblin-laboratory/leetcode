const convert = require('..');

describe('6-zigzag-conversion', () => {
  it('1 行', () => {
    expect(convert('AB', 1)).toBe('AB');
  });

  it('2 行', () => {
    expect(convert('ABC', 2)).toBe('ACB');
  });

  it('3 行', () => {
    expect(convert('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  });

  it('4 行', () => {
    expect(convert('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
  });
});
