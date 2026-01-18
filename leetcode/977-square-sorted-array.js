
let nums = [-3,0,2]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // nums can be negative, so number should be compared by absolute value
    //we can square first then sort
    //the max will be at end of array
    //1 pointer start at 0, another pointer go until it find the number smaller than that, we cant simply swap, while swapping recaculate it into square.1st pointer move on, but we cant find min this way, first number should be min then second number should be min of the rest
    //we can move until we find the positive one, first pointer at 0, second pointer at first >=0 position found, which one smaller will be at 0, if no swap then next one on the right is always larger, and we just return the square of original array. If swap happens, right vs right+n and swap when find >= smaller value, then left++ is compared with this, .. 0,-1,-4,3,10| 0,-1,4,-3. 
    //number on the left once swap will be compared with each on the right and find it right position in a separate loop, the right index is always min of all on the right, again compared with the next left
    //got to find abs min to place the right pointer
    
    
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    
    // Fill result from right to left (largest squares first)
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    
    return result;
};
console.log(sortedSquares(nums))