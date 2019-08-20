const convert = require('..');

describe('6-zigzag-conversion', () => {
  it('3 行', () => {
    expect(convert('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN');
  });

  it('4 行', () => {
    expect(convert('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG');
  });
});
