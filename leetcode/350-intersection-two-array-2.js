/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    //return intersection
    //appear many times --> not set anymore
    //if we create a map out of smaller array, then when we iterate through longer array must ensure result_arr length =min
    // iterate through bigger array, make a map then later iterate through smaller array to filter out those not in the bigger array.
    let maxArr = nums1.length >=nums2.length ? nums1:nums2
    let minArr = nums1.length<nums2.length? nums1:nums2
    let map = new Map()
    for(let i =0;i<maxArr.length;i++){
        if (map.has(maxArr[i])){
            map.set(maxArr[i],map.get(maxArr[i])+1)
        }else{
            map.set(maxArr[i],1)
        }
    }
    let result = minArr.filter(x=>{
        if(map.has(x) && map.get(x)>=1){
            map.set(x,map.get(x)-1)
            return true
        }else{
            return false
        }
    })
    return result
};