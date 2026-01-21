/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //use hash map for this
    // nums.forEach((num,index) => {
    //     if(map.has(num)){
    //         return false // this move on to next element, not ends the loop
    //     } 
    //     map.set(num,index)
    // })
    // return true
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     if (map.has(num)) {
    //         return true;       // duplicate found
    //     }
    //     map.set(num, i);
    // }
    // return false;          // no duplicates
    return new Set(nums).size !== nums.length;
};
// Set is faster if duplicates are guaranteed and for smaller arrays
// Map is better if duplicates are rare and for larger arrays