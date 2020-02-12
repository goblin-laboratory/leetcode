module.exports = isMatch;

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) {
    return true;
  }
  if (!s) {
    return 2 === p.length && '*' === p[1];
  }
  // for (let i = 0; i < s.length; i++) {
  //   for (let j = 0; j < p.length - 1; j++) {
  //     if ('*' === p[j + 1]) {
  //       if ()
  //     } else if ('.' === p[j]) else {}
  //   }
  // }
  return false;
};

console.log(isMatch('', ''));
