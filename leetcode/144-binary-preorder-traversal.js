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
var preorderTraversal = function (root) {
  const result = [];

  function dfs(node) {
    if (!node) return;
    result.push(node.val);  // visit root first
    dfs(node.left);          // then left subtree
    dfs(node.right);         // then right subtree
  }

  dfs(root);
  return result;
};
