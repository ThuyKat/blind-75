/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //i,j with distance <=k
    //nums[i]==nums[j]
    //use map with nums[x] is key, iterate over map and if found compare i, j,k
    let map = new Map()
    for(let i =0;i<nums.length;i++){
        if(map.has(nums[i])){
            let j = map.get(nums[i])
            if(Math.abs(i-j)<=k){
                return true
            }else{
                map.set(nums[i],i)  //multiple similar elements at different indic  
            }
        }else{
            map.set(nums[i],i)
        }  
    }
    return false
};