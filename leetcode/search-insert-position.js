/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //find target in nums, return target index or insertion order
    // must be logn algo
    //nums is sorted array
    let left = 0
    let right = nums.length -1
    let midIndex = Math.floor((left+right)/2)
    if(nums[right]<target){
        return nums.length
    }
    if(nums[right]==target){
        return nums.length-1
    }
    if(nums[left]>=target){
        return 0
    }
    while(midIndex >left){
        if(nums[midIndex]<target){
            left = midIndex
        }else if(nums[midIndex]>target){
            right = midIndex
        }else{
            return midIndex
        }
        midIndex = Math.floor((left+right)/2)
    }
    return left +1
    
    
};
// Example usage:
const nums = [1, 3, 5, 6];
// const target = 5;
// const index = searchInsert(nums, target);
// console.log(index); // Output: 2
const target2 = 2;
const index2 = searchInsert(nums, target2);
console.log(index2); // Output: 1
// const target3 = 7;
// const index3 = searchInsert(nums, target3);
// console.log(index3); // Output: 4