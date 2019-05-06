var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (1 === arr.length % 2) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
};

// 测试代码
(() => {
  let l1 = findMedianSortedArrays([1, 3], [2]);
  let l2 = findMedianSortedArrays([1, 2], [3, 4]);
  let l3 = findMedianSortedArrays([3], [-2, -1]);
  debugger;
  let l4 = findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
  debugger;
})();
