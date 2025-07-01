/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //nums1 and nums2, non-decreasing order, m,n numbers of integers
    //return num1 after merging num2 in --> num1 has length m+n
    //iterate m elements of nums1 then n elements of num2 if i >=m
    // compare first 2 element of each array and see if which is smaller that will be taken to write first, remaining then be compared with the next in line 
    if(m==0){
        nums1.concat(...nums2)
        return nums1
    }
    if(n==0){
        return nums1
    }
    let i=0
    while(i<=m){
        if(nums1[i]> nums2[0] ){
            let dummy = nums1[i]
            nums1[i]= nums2[0]
            nums2[0]=dummy 
            nums2.sort((a,b)=>a-b) //compares to the Min of nums2
        }
        i++
    }
    
    for(let i=0;i<n;i++){
        nums1[m+i]=nums2[i]
    }
    return nums1
};

// Example usage:
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3)); // Output: [1,2,3,4,5,6]