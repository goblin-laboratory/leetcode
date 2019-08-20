module.exports = convert;

// 暴力解法
function convert(s, numRows) {
  // TODO
  const arr = initializeArrayWithValues(numRows, '');
  // const arr1 = createArrayWithDefaultValues(numRows, '');
  for (let i = 0, j = 0, flag = 1; i < s.length; i++, j += flag) {
    arr[j] += s[i];
    if (j === numRows - 1) {
      flag = -1;
    } else if (0 === j) {
      flag = 1;
    }
  }
  return arr.join('');
}

// const createArrayWithDefaultValues = (len, defaultValue) => {
//   const a = [];
//   for (let index = 0; index < len; index++) {
//     a.push(defaultValue);
//   }
//   return a;
// };

// https://www.html.cn/30-seconds-of-code/#initializearraywithvalues
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

// convert('LEETCODEISHIRING', 3);
