/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // remove duplicates in nums
    // keep order the same, remove duplicates from arrays only
    //create a set, push it in the set --> we have all unique num in same order
    //turn the set to array once done
    // nums is sorted in non-decreasing order
    // we might not need set because it's already sorted

    if (nums.length <= 1) return nums.length;
    
    let writeIndex = 1;  // Where to write next unique element
    
    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    
    return writeIndex;
};

    // my first approach was keep left =0 then right = 1 then keep increasing right until nums[left] !== nums[right] then turn nums[left+1] = nums[right], but for all the numbers at that time between left and right, nothing change
    // I keep focusing on comparing left and left+1 positions, hence I need to move both left right, and writing on left+1 if I found nums[right] !== nums[left]
    // more efficient approach focuses on just writing position (left+1) and instead of comparing right and left, it's comparing right and right-1. 
    // fixed sliding window is better than widening one. next time better thinking of alternative of left/right point the one that has the same value and easier for comparison
// Example usage:
const nums = [0,0,0,0,0,1,2,2,3,3,4,4];
const newLength = removeDuplicates(nums);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [1, 2]