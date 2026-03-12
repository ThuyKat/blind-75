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
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
  //any root-to-leaf that sumup to targetSum?true:false
  let actualSum = (root, current) => {
    if (!root) {
      return false;
    }
    current += root.val;
    if (!root.left && !root.right) return current === targetSum;
    return actualSum(root.left, current) || actualSum(root.right, current);
  };
  return actualSum(root, 0);
};
