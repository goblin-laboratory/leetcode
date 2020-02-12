module.exports = isPalindrome;

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = x.toString();
  return s === reverseString(s);
};

const reverseString = str => [...str].reverse().join('');
