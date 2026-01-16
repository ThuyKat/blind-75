/*
LINK: https://leetcode.com/problems/remove-element/submissions/1667734565
Runtime beats 100% of users with JavaScript
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //return num diff to val
    //any order
    // go from end of array, pop out the last num, and if num !==val then shift it to beginning of array

   let count = nums.length
   while(count>0){
    let last_num = nums.pop()
    if(last_num!== val){
       nums.unshift(last_num)
    }
    count--
   }
   return nums.length
};
// Example usage:
let nums = [0,1,2,2,3,0,4,2]
const val = 2;
const newLength = removeElement(nums, val);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [2, 2]