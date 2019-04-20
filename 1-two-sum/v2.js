var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0, l = nums.length; i < l; i += 1) {
    j = target - nums[i];
    if (undefined !== map[j]) {
      return [map[j], i];
    }
    map[nums[i]] = i;
  }
  return [];
};
