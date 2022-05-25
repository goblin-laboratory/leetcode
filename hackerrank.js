function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  const sum = arr.reduce((a, b) => a + b);
  console.log(sum - arr[4], sum - arr[0]);
}


/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  const matched = s.match(/^(\d{2})(.*)(AM|PM)$/);
  if (!matched) {
    return 'Invalid time';
  }
  const [, h, , ampm] = matched;
  if ('AM' === ampm) {
    if ('12' === h) {
      return '00' + matched[2];
    }
    return h + matched[2];
  }
  if ('12' === h) {
    return '12' + matched[2];
  }
  return `${(parseInt(h, 10) + 12)}${matched[2]}`;
}

function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  const len = arr.length;
  return arr[Math.floor(len/2)];
}



function lonelyinteger(a) {
  // Write your code here
  const map = {};
  a.forEach(v => {
    if (map[v]) {
      map[v]++;
    } else {
      map[v] = 1;
    }
  });
  for (let k in map) {
    if (map.hasOwnProperty(k) && 1=== map[k]) {
      return k;
    }
  }
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  if (0 === arr.length || arr.length !== arr[0].length) {
    return 0;
  }
  const len1 = arr.length;
  const len2 = arr[0].length;
  let v1 =0, v2 = 0;
  for (let i = 0; i < len1; i++) {
    v1 += arr[i][i];
    v2 += arr[i][len2 - 1 - i];
  }
  return Math.abs(v1 - v2);
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  const a = Array(100).fill(0);
  for(let i = 0, l = arr.length; i < l; i++) {
    if (!a[arr[i]]){
      a[arr[i]] = 1;
    } else if (a[arr[i]]) {
      a[arr[i]]++;
    }
  }
  return a;
  // const b = [];
  // for(let i = 0, l = a.length; i < l; i++) {
  //   if (a[i]) {
  //     for (let j = 0; j < a[i]; j++) {
  //       b.push(i);
  //     }
  //   }
  // }
  // return b;
}

function flipp(matrix, len){
  let r = false;
  for (let i = 0; i < len; i++) {
    let sum1 = 0, sum2 = 0;
    const temArr = [];
    for (let j = 0; j < len / 2; j++) {
      sum1 += matrix[i][j];
      sum2 += matrix[i][len - 1 - j];
      temArr[j] = matrix[i][len - 1 - j];
      temArr[len - 1 - j] = matrix[i][j];
    }
    if (sum1 < sum2) {
      matrix[i] = temArr;
      r = true;
    }
  }
  for (let i = 0; i < len; i++) {
    let sum1 = 0, sum2 = 0;
    for (let j = 0; j < len /2; j++) {
      sum1 += matrix[j][i];
      sum2 += matrix[len - 1 - j][i];
    }
    if (sum1 < sum2) {
      let tmp;
      for (let j = 0; j < len /2; j++) {
        tmp = matrix[j][i];
        matrix[j][i] = matrix[len - 1 - j][i];
        matrix[len - 1 - j][i] = tmp;
      }
      r = true;
    }
  }
  if (r) {
    flipp(matrix, len);
  }
}

function flippingMatrix(matrix) {
  // Write your code here
  const len = matrix.length;
  debugger;
  flipp(matrix, len);
  let sum = 0;
  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < len /2; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

const arrList = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];

flippingMatrix(arrList);
