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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  //2 nodes between --> 3 edges
  // if root.left or right is null then not going through root
  //in this case go to the top node (not root) and go to the farthest node possible (till the leaf)
  //need to find leaf on the left and leaf on the right which is not nulll
  //actually need to find the height of left branch and right branch of a particular node --> find height of node.left and node.right

  let max = 0;

  function height(node) {
    if (node === null) return 0;
    const left = height(node.left);
    const right = height(node.right);
    max = Math.max(max, left + right); // diameter through this node
    return 1 + Math.max(left, right); // height of this node
  }

  height(root);
  return max;
};
