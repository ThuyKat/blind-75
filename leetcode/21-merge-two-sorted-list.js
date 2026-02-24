/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //linked list : each el is like {value:1,next:{value:2}}
  //each element now needs to link to a different next object, el.next={value:1}
  // focus on finding the middle value of two nodes
  // the difference of two notes indicates positions
  //create an array that we loop through each list, then record distance of each note to the first node, we are going to end up with an array of distance, the index of that distance value will be the index on the first/ or second list by taking index mod list1.length.
  //let call the current node current and next node next, iterate through the second list, if we find smaller distance, we change current node to that new node, and we again have a new distance.
  //actually array is not needed, we can create infinite loop and jump from list 1 to list 2 if smaller distance found, then compare to the next of list 2 to again next of list 1.. and we need to record which index we are progressing for list 1 as well as list 2.
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  } else {
    let result;
    if (list1.val <= list2.val) {
      result = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      result = new ListNode(list2.val);
      list2 = list2.next;
    }

    let current = result;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
    current.next = list1 || list2;
    return result;
  }
};
