/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展算法
var longestPalindrome = function(s) {
  if (1 >= s.length) {
    return s;
  }
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  let L = left,
    R = right;
  while (0 <= L && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
};

module.exports = longestPalindrome;
