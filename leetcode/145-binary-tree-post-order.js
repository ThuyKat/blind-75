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
var postorderTraversal = function (root) {
  const result = [];

  function dfs(node) {
    if (!node) return;
    dfs(node.left); // left subtree first
    dfs(node.right); // then right subtree
    result.push(node.val); // visit root last
  }

  dfs(root);
  return result;
};
