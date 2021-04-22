// 1290번 Convert Binary Number in a Linked List to Integer

// vscode에선 작동하는데 leetcode에선 런타임 에러가 뜬다.
// join에서 에러가 뜨는 것 같다.
const getDecimalValue = (head) => {
  return parseInt(+head.join(''), 2);
}

// Linked List를 사용해야만 하는 문제인 것 같다.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue2 = (head) => {
  let tmp = '';
  while (head) {
    tmp += head.val;
    head = head.next;
  }
  return parseInt(tmp, 2);
}

const head = [1, 0, 1];
console.log(getDecimalValue2(head));