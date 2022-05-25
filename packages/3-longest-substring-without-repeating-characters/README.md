# 3. 无重复字符的最长子串

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

```
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 说明：

### v1：暴力接法

```
执行用时 : 1040 ms, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了7.58% 的用户
内存消耗 : 85.9 MB, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了5.02% 的用户
```

### v2：滑动窗口

```
执行用时 : 128 ms, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了98.17% 的用户
内存消耗 : 37.8 MB, 在Longest Substring Without Repeating Characters的JavaScript提交中击败了85.21% 的用户
```

### v3：滑动窗口递归实现

```
执行出错：986 / 987 个通过测试用例
执行出错信息：Line 9: RangeError: Maximum call stack size exceeded
```
