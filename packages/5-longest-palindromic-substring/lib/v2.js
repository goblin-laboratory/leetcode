/**
 * @param {string} s
 * @return {string}
 */
// 最长公共子串
var longestPalindrome = function(s) {
  const str = reverseString(s);
  for (let l = s.length; 0 < l; l--) {
    for (let i = 0; i < s.length - l + 1; i++) {
      const sub = s.substr(i, l);
      if (sub === str.substr(s.length - 1 - (i + l - 1), l)) {
        return sub;
      }
      // const index = str.indexOf(sub);
      // if (-1 !== index && i === s.length - 1 - (index + l - 1)) {
      //   return sub;
      // }
    }
  }
  return '';
};

const reverseString = str => [...str].reverse().join('');

module.exports = longestPalindrome;
