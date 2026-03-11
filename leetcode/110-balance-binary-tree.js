/**
 * 110. Balanced Binary Tree
 * A height-balanced binary tree is one where the depth of the two subtrees
 * of every node never differs by more than one.
 *
 * Time: O(n) | Space: O(h) where h is tree height
 */

var isBalanced = function (root) {
  function checkHeight(node) {
    if (!node) return 0;

    const left = checkHeight(node.left);
    if (left === -1) return -1;

    const right = checkHeight(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;

    return 1 + Math.max(left, right);
  }

  return checkHeight(root) !== -1;
};
