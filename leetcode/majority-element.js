/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,1,2,3,3,1,1]
var majorityElement = function(nums) {
    let count = 0
    let median = 0
    for(let i=0;i<nums.length;i++){
        if(count ==0){
            median = nums[i]
        }
        if(nums[i] == median){
            count++
            
        }else{
            count--
        }
        console.log(median,count);
    }

    console.log( median);

};
majorityElement(nums);
// majority element always exist, to find it I can sort the array and count the appearance, prob create another array to record frequency, but this wont work for large list
//to find mode, find median and mean first. To find median, need to find the number that has n/2 larger than it and n/2 smaller than it. if n is odd, median =mode><=mean. If n is even then median = mode ><=mean, in both case median is mode. 
// method 1: sort the array and return the middle element
//method 2 (MOOR ALGO EXPLAINED!! ): there are 2 categories of number: the majority element and the rest. If we divide them into 2 teams, the majority element team will always have more members than the rest team. Problem is how to pick the majority element from the team? 
    //number of majority elements = n/2 +k
    // number of non-majority elements = n/2 -k
    //canceled out = 2k >0
    // so lets say we iterate through the array, divide that array into segments. In each segment, similar element to the first will has value +1, diffrent elment will have value -1. Segment ends when accumulated sum = 0. So each segment will have elements that can be canceled out. Lets say before the final segment, we used m majority elements and p non-majority elements. majority elements can have value as 1 or -1, same for non-majority elements. And we have n/2+k-m majority elements and n/2-k-p non majority element left. If first element of final segment is not majority, it will need to have more of the same number to keep it it in the final segment, and it end up with positive sum since final segment has odd elements. Now we need to prove that the starting of final segment cannot be non-majority element. Assum it is non-majority element, then n/2-k-p >n/2+k-m or 2k <m-p.. 2k >0 so m>p. We used more majority elements than non-majority elements before final segment. Is that possible? Lets say for a segment, if we start with majority element, we will have even majority element and non-majoirty element. If we start with non-majority element, we will use either equal or more non-majority, so we always end up using more or equal non-majority elements. So p >= m always. So the first element of final segment has to be majority element. 
    // So we can just iterate through the array, when count =0, we pick the next element as majority candidate, and increase count when we see same element, decrease count when we see different element. In the end, the candidate will be the majority element.
