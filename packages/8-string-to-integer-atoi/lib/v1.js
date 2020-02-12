module.exports = myAtoi;

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const matched = str.match(/^\s*([+-]?\d+).*$/);
  if (!matched) {
    return 0;
  }
  const v = parseInt(matched[1], 10);
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 31);
  if (v > max) {
    return max;
  }
  if (v < min) {
    return min;
  }
  return v;
};
