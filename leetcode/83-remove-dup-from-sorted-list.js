/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  //while head.next !== null then
  //if head.next.val == head.val, we remove the node
  // hard to remove the node, so I would create a new ListNode and add in the LinkedList if head.next.val !== head.val
  if (!head) return head;
  let current = head;
  while (current.next) {
    if (current.val !== current.next.val) {
      current = current.next;
    } else {
      current.next = current.next.next;
    }
  }
  return head;
};
