/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //return missing num
    // range is [0,n] and array has n numbers because it is missing 1 number
    let result = 0
    for(let i=0;i<nums.length;i++){
        result = result^nums[i]^(i+1) //nums[0]^1^nums[1]^2^nums[2]^3
    }
    if(result !=0){
        return result
    }else{
        return 0
    }
};