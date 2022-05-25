// 递归实现

var twoSum = function(nums, target) {
  return find(nums, target, 0);
};

const find = (nums, target, i) => {
  if (i + 1 >= nums.length) {
    return null;
  }
  const t = target - nums[i];
  const j = nums.slice(i + 1).findIndex(it => t === it);
  if (-1 !== j) {
    return [i, i + j + 1];
  }
  return find(nums, target, i + 1);
};

// 测试代码
(() => {
  const r1 = twoSum([2, 7, 11, 15], 9);
  debugger;
  const r2 = twoSum([3, 2, 4], 6);
  debugger;
})();
