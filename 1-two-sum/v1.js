var twoSum = function(nums, target) {
  for (let i = 0, l = nums.length; i < l; i += 1) {
    for (let j = i + 1; j < l; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
