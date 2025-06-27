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
    
  
   let root_arr =[]
   function bt_arr(node){
    if(!node){
        return
    }
    bt_arr(node.left)
    root_arr.push(node.val)
    bt_arr(node.right)
   }
   bt_arr(root)
   return root_arr

};