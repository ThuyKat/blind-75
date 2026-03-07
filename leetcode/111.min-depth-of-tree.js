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
//DFS approach: go to the end, calculate depth of each possibility (explicitly by recursion) then compare
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  } else if (root.left && !root.right) {
    return 1 + minDepth(root.left);
  } else if (root.right && !root.left) {
    return 1 + minDepth(root.right);
  } else if (!root.left && !root.right) {
    return 1;
  }
};
//BFS approach: carry depth, focus on finding the leaf instead

var minDepth = function (root) {
  if (!root) return 0;

  const queue = [[root, 1]];

  while (queue.length) {
    const [node, depth] = queue.shift();

    // first leaf we hit is the minimum depth
    if (!node.left && !node.right) return depth;

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};
