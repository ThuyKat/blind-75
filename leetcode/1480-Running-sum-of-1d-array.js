/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //accumulate sum, runningSum[i] +=n[i]
    let runningSum = []
    runningSum[0] = nums[0]
    for(let i= 1;i<nums.length;i++){
        runningSum[i] = runningSum[i-1] + nums[i]
    }
    return runningSum
};