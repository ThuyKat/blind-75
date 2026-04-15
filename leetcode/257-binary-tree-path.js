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
  //path is passed because incase of last node, we don't add the arrow string. Arrow string only added everytime we call pathString function to add a new node. Path should be passed to pathString as an argument because it should not be reset to "" until we reach to the leaf.
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
