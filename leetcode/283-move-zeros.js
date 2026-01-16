/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //move 0 to the end, pointer at the start to mark the considering number and 1 pointer at the end to mark where 0 is added
    // need to maintain the order, so if I move from front to back, I need to change the index of all number in middle, typically index-1, I remember it in dummy variable and at last I add it, or I just need to find the 0, move the next non-0 element to its place. 1 pointer will be at start to find 0, another pointer will be next to it to find non-0 element
    let left = 0
    let right = 1
    while (right<nums.length){
        
        if(nums[left] ==0){
            if(nums[right]!=0){
                //move value of right to left position
                nums[left] = nums[right]
                nums[right]= 0
                left ++
            }
        }else{
            left++

        }
        right++
        
    }
    return nums
};