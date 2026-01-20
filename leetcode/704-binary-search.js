/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [-1,0,3,5,9,12]
var search = function(nums, target) {
    //nums, sorted 
    //search target in nums, if not exist return -1
    //0(logn)
    //find the middle see if target > middle number
    let len = nums.length/2
    let target_index = Math.floor(len)
   
    while(Math.floor(len)>0){
        if(target>nums[target_index]){
            target_index=Math.ceil(target_index+len/2)
            
        }else if(target<nums[target_index]){
            target_index=Math.floor(target_index-len/2)
        }else{
            return target_index
        }
        len=len/2
    }
    if(target!= nums[target_index]){
        return -1
    }else{
        return target_index
    }
    
    
};
console.log(search(nums, 9))
//what's wrong with my code?
//when len is less than 1, Math.floor(len) = 0, so target_index will not change anymore
//need to add a check for that
