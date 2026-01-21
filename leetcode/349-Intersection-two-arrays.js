/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    //return intersection of nums1, nums2 --> present in both, dont need to be adjacent
    //must be unique --> no repeated numbers --> set? x
    //any order
    //map, choose the shorter array --> frequency of element is key, value is index of element. 
    //result =[], iterate through nums1, if current num is found in map, push that to result. 
    //set also has .has() method
    const [minNums,maxNums] = nums1.length>=nums2.length?[nums2,nums1]:[nums1,nums2]
    let result = new Set()
    let map = new Map()
    for(let i=0;i<minNums.length;i++){
        if(map.has(minNums[i])){
            continue
        }else{
            map.set(minNums[i],1)
        }
    }
    for( let i=0;i<maxNums.length;i++){
        if(map.has(maxNums[i])){
            result.add(maxNums[i])
        }
    }
    return Array.from(result)
};