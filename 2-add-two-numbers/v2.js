// 递归实现
var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0);
};

const add = (l1, l2, carry) => {
  if (!l1 && !l2 && !carry) {
    return null;
  }
  const s = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (carry || 0);
  const node = new ListNode(s % 10);
  node.next = add(l1 && l1.next, l2 && l2.next, Math.floor(s / 10));
  return node;
};


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
