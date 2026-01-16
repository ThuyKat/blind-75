/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //array
    // return indices of two nums in array that add up to target
    // with each num check target -num and see if it's in nums
    // we can use set before using .has.. but still not good for performance
    //first remove those > target
    //now we have an array of all nums that are <= target
    //sort array, take first num + last num // most expensive ops is sorting
    // if result > target, move pointer to left, and result <target,move pointer to right
    // keep moving until I find = target
let map = new Map()
let result =[]
for(let i =0; i< nums.length;i++){
    if(map.has(nums[i])){
        map.get(nums[i]).push(i)
    }else{
        map.set(nums[i],[i])
    }
}
for(let i =0; i< nums.length;i++){
    let diff = target - nums[i]
    if(map.has(diff)){
        if(map.get(diff).length >=2){
            return [map.get(diff)[0],map.get(diff)[1]] //exact 1 solution
        }else{
            if(i!==map.get(diff)[0]){
                return [i,map.get(diff)[0]]
            }
        }
    }
}



    
};