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
 * @return {string[]}
 */

var binaryTreePaths = function (root) {
  //return an array  of string, node value separated by the arrow, dont include null
  let result = [];
  const dfs = (node, path) => {
    if (!node) return;
    path += node.val;
    if (!node.left && !node.right) {
      result.push(path);
    } else {
      dfs(node.left, path + '->');
      dfs(node.right, path + '->');
    }
  };

  dfs(root, '');
  return result;
};
