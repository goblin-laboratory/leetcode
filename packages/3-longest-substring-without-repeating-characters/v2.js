// 滑动窗口

var lengthOfLongestSubstring = function (s) {
  if (0 === s.length) {
    return 0;
  }
  let max = 1;
  for (let i = 0, j = 1, l = s.length; j < l; j += 1) {
    const str = s.substring(i, j);
    const index = str.indexOf(s[j]);
    let len = str.length;
    if (-1 === index) {
      len += 1;
    } else {
      i += index + 1;
    }
    max = max <= len ? len : max;
  }
  return max;
};

// 测试代码
(() => {
  debugger;
  let l1 = lengthOfLongestSubstring("pwwkew");
  let l2 = lengthOfLongestSubstring("au");
  let l5 = lengthOfLongestSubstring("ggububgvfk");
  debugger;
})()
