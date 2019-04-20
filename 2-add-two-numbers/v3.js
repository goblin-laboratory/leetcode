var addTwoNumbers = function(l1, l2) {
  let n1 = l1;
  let n2 = l2;
  let carry = 0;
  let l3 = new ListNode(0);
  let n3 = l3;
  while (n1 || n2 || carry) {
    const s = ((n1 && n1.val) || 0) + ((n2 && n2.val) || 0) + (carry || 0);
    n3.next = new ListNode(s % 10);
    carry = Math.floor(s / 10);
    n1 = n1 && n1.next;
    n2 = n2 && n2.next;
    n3 = n3.next;
  }
  return l3.next;
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
