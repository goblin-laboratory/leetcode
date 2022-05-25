var findMedianSortedArrays = function(nums1, nums2) {
  if (0 === nums1.length) {
    if (1 === nums2.length % 2) {
      return nums2[Math.floor(nums2.length / 2)];
    } else {
      return (nums2[nums2.length / 2 - 1] + nums2[nums2.length / 2]) / 2;
    }
  } else if (0 === nums2.length) {
    if (1 === nums1.length % 2) {
      return nums1[Math.floor(nums1.length / 2)];
    } else {
      return (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2;
    }
  }
  let i = 0;
  let j = 0;
  let c1, c2;
  let len = nums1.length + nums2.length;
  while (i + j <= len / 2) {
    if (undefined === nums2[j] || nums1[i] < nums2[j]) {
      c1 = c2;
      c2 = nums1[i];
      i += 1;
    } else {
      c1 = c2;
      c2 = nums2[j];
      j += 1;
    }
  }
  if (1 === len % 2) {
    return c2;
  }
  return (c1 + c2) / 2;
};

// 测试代码
(() => {
  let l1 = findMedianSortedArrays([1, 3], [2]);
  let l2 = findMedianSortedArrays([1, 2], [3, 4]);
  let l3 = findMedianSortedArrays([3], [-2, -1]);
  let l4 = findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  debugger;
  let l5 = findMedianSortedArrays([1], [1]);
  debugger;
})();
