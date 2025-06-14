let nums = [2,7,11,15]
let target = 9
let nums2=[...nums]
nums.sort((a,b)=>a-b)
let left = Math.floor(nums.length/2)-1
let right = Math.floor(nums.length/2)

while (nums[left]+nums[right]!==target){
    if(nums[left]+nums[right]>target){
        left >0? left--:right--

    }else{
        right<nums.length-1?right++:left++
    }
}
console.log(nums2.indexOf(nums[left]), nums2.indexOf(nums[right]))

