module.exports = reverse;

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const flag = 0 <= x ? 1 : -1;
  const str = reverseString((x * flag).toString());
  const r = parseInt(str, 10) * flag;
  const max = Math.pow(2, 31);
  return r < -1 * max || r > max - 1 ? 0 : r;
}

// 反转一个字符串:
// https://www.html.cn/30-seconds-of-code/#reversestring
const reverseString = str => [...str].reverse().join('');

const reverseStr = str => {
  let s = '';
  for (let i = str.length - 1; 0 <= i; i--) {
    s += str[i];
  }
  return s;
};
