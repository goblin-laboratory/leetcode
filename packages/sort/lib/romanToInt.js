function romanToInt(s) {
  let v = 0;
  const matched = s.match(/(C?M|C?D|X?C|X?L|I?X|I?V|I)/g);
  if (!matched) {
    return v;
  }
  for (let i = 0, l = matched.length; i < l; i++) {
    switch (matched[i]) {
      case 'M':
        v += 1000;
        break;
      case 'CM':
        v += 900;
        break;
      case 'D':
        v += 500;
        break;
      case 'CD':
        v += 400;
        break;
      case 'C':
        v += 100;
        break;
      case 'XC':
        v += 90;
        break;
      case 'L':
        v += 50;
        break;
      case 'XL':
        v += 40;
        break;
      case 'X':
        v += 10;
        break;
      case 'IX':
        v += 9;
        break;
      case 'V':
        v += 5;
        break;
      case 'IV':
        v += 4;
        break;
      case 'I':
        v += 1;
        break;
      default:
        break;
    }
  }
  return v;
}

console.log(romanToInt('MCMXCIV'));
