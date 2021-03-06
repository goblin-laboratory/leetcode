/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const sub = s.substr(j, i);
      if (isPalindrome(sub)) {
        return sub;
      }
    }
  }
  return '';
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
