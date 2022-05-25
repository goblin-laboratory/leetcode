// 递归实现滑动窗口
var lengthOfLongestSubstring = function (s) {
  return getSubstringMaxLen(s, 0, 0);
};

const getSubstringMaxLen = (s, len = 0, max = 0) => {
  if (s.length <= len || max >= 128) {
    return max;
  }
  const str = s.substring(0, len);
  const index = str.indexOf(s[len]);
  if (-1 === index) {
    return getSubstringMaxLen(s, len + 1, len + 1 > max ? len + 1 : max);
  } else {
    return getSubstringMaxLen(s.substr(index + 1), len - index - 1, len > max ? len : max);
  }
};

// 测试代码
(() => {
  let l1 = lengthOfLongestSubstring("pwwkew");
  let l2 = lengthOfLongestSubstring("au");
  let l3 = lengthOfLongestSubstring("a");
  let l4 = lengthOfLongestSubstring("bbbbb");
  let l5 = lengthOfLongestSubstring("ggububgvfk");

  let l6 = lengthOfLongestSubstring("dvdf");
  debugger;
  let l7 = lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ");
  debugger;
})()
