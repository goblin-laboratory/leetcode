
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const a1 = list2array(l1);
  const a2 = list2array(l2);
  const a3 = add(a1, a2);
  return array2list(a3);
};

const list2array = (list) => {
  const arr = [];
  let n = list;
  while(n){
    arr.push(n.val);
    n = n.next;
  }
  return arr;
};

const array2list = (arr) => {
  const list = new ListNode(arr[0]);
  let lastNode = list;
  for(let i = 1, len = arr.length; i < len; i += 1) {
    const node = new ListNode(arr[i]);
    lastNode.next = node;
    lastNode = node;
  }
  return list;
};

const add = (arr1, arr2) => {
  const result = [];
  let carry = 0;
  let i = 0;
  for(let i = 0, l = Math.max(arr1.length, arr2.length); i < l; i += 1) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0) + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry) {
    result.push(carry);
  }
  return result;
}

// 测试代码
function ListNode(val) {
  this.val = val;
  this.next = null;
}

(() => {
  // (2 -> 4 -> 3) + (5 -> 6 -> 4)
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next  = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next  = new ListNode(4);

  debugger;
  const l3 = addTwoNumbers(l1, l2);
  debugger;
})();
