/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
      //inorder --> left branch, root, right branch
    //first number is root, then second row 1*2 = 2 numbers
    //then third row that has 2*2=4 numbers - 1 null = 3 numbers
    // then fourth rows has remaining 
    //k --> 2k-null --> (2k-null)*2 -null
    // output : go from last row, beginning of row is null, move to 1 level obove it--> push in output --> next one is second value of last row --> 
};