# 4. 寻找两个有序数组的中位数

https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

示例 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

## 说明：

### v1：Array sort

```
执行用时 : 240 ms, 在Median of Two Sorted Arrays的JavaScript提交中击败了64.67% 的用户
内存消耗 : 40 MB, 在Median of Two Sorted Arrays的JavaScript提交中击败了23.58% 的用户
```

### v2:

```
执行用时 : 196 ms, 在Median of Two Sorted Arrays的JavaScript提交中击败了93.05% 的用户
内存消耗 : 38.8 MB, 在Median of Two Sorted Arrays的JavaScript提交中击败了92.97% 的用户
```
