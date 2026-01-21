/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
nums1 =[4,1,2]
nums2 =[1,3,4,2]

var nextGreaterElement = function(nums1, nums2) {
    //next greater element
    //find index in nums2 that has value equal to index in num1, find the next greater element of that index.
    //no greater? return -1
    // return array of greater element results
    //normally we have to run i in nums1 then find number == nums1[i] in nums2, repeate for each number in nums1. This makes 0n2. is nums1 sorted? better not because result arr should be in right order. 
    //we can use nums2.indexOf(num)? then move forward to find num greater than this
    //-1 happens when no equal found, and when equal found but no greater element found
    // let result_arr=[]
    // for (let i=0;i<nums1.length;i++){
    //     let found_index = nums2.indexOf(nums1[i])
    //     if(found_index ==-1){
    //         result_arr.push(-1)
    //         continue
    //     }
    //     if(found_index != -1){
    //         let next_greater = 0
    //         for(let j=found_index+1;j<nums2.length;j++){
    //             if (nums2[j]>nums2[found_index]){
    //                 next_greater = j
    //                 result_arr.push(nums2[j])
    //                 break
    //             }   
    //         }
    //         if(next_greater ==0){
    //             result_arr.push(-1)
    //         }
    //     }  
    // }
    // return result_arr
     let stack=[]
    let next_greater=new Map()
    for(let i =nums2.length-1;i>=0;i--){
        while(stack.length && stack[stack.length-1]<=nums2[i]){
            stack.pop()
        }
        if(stack.length==0){
            next_greater[nums2[i]]=-1
        }else{
            next_greater[nums2[i]]=stack[stack.length-1]
        }
        stack.push(nums2[i])
    }
    return nums1.map(num=>next_greater[num])
};
console.log(nextGreaterElement(nums1,nums2))