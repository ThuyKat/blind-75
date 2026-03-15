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
  //go from root to next node if root.left not null and root.right null, goes to root.left, if root.left null and root.right not null go to right node , if both are null it's the last node of the current string, push the current path into result array.
  //
  let result = [];
  var pathString = (node, path = '') => {
    if (!node) {
      return;
    }
    path = path + node.val;

    if (node.left && !node.right) {
      pathString(node.left, path + '->');
    } else if (!node.left && node.right) {
      pathString(node.right, path + '->');
    } else if (node.left && node.right) {
      pathString(node.left, path + '->');
      pathString(node.right, path + '->');
    } else {
      result.push(path);
    }
  };
  pathString(root);
  return result;
};
