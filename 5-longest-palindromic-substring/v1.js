/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const l = s.length;
  if (0 === l) {
    return '';
  }
  let str = s.substring(0, 1);
  for (let i = 0; i < l - str.length; i += 1) {
    for (let j = l; j > i + str.length; j -= 1) {
      const substring = s.substring(i, j);
      if (isPalindrome(substring)) {
        str = substring;
        break;
      }
    }
  }
  return str;
};

const isPalindrome = s => {
  for (let i = 0, l = s.length; i < l / 2; i += 1) {
    if (s[i] !== s[l - 1 - i]) {
      return false;
    }
  }
  return true;
};

(() => {
  debugger;
  const r1 = longestPalindrome('babad');
  console.log('r1: %s', r1);
  debugger;
  const r2 = longestPalindrome('cbbd');
  console.log('r2: %s', r2);
})();
