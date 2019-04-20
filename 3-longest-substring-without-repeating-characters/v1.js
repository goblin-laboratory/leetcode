

// 暴力解法
var lengthOfLongestSubstring = function(s) {
  let map = {};
  let max = 0;
  for (let i = 0, l = s.length; i < l; i+=1){
    map = {};
    map[s[i]] = true;
    let len = 1;
    for (let j = i + 1; j < l; j+=1) {
      if (map[s[j]]) {
        break;
      }
      map[s[j]] = true;
      len += 1;
    }
    if (len > max) {
      max = len;
    }
  }
  return max;
};

// 测试代码
(() => {
  let l1 = lengthOfLongestSubstring("pwwkew");
  let l2 = lengthOfLongestSubstring("au");
  let l3 = lengthOfLongestSubstring("a");
  let l4 = lengthOfLongestSubstring("bbbbb");
  let l5 = lengthOfLongestSubstring("ggububgvfk");
  debugger;
  let l6 = lengthOfLongestSubstring("dvdf");
  debugger;
})()
