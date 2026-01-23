/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //find the single num
    //map to count frequency?
    //put in set and 2 set minus sum
    // let sum = 0
    // for(let i= 0;i<nums.length;i++){
    //     sum+=nums[i]
    // }
    // let set = new Set(nums)
    // let sum_set = 0
    // set.forEach(val => sum_set+=val)
    // return 2*sum_set - sum
    //XOR solution: a^a=0 because 1^1=0 and 0^0=0
    let sum = 0
    for(let num of nums){
        sum = sum^num
    }
    return sum
};