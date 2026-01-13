/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
};
// majority element always exist, to find it I can sort the array and count the appearance, prob create another array to record frequency, but this wont work for large list
//to find mode, find median and mean first. To find median, need to find the number that has n/2 larger than it and n/2 smaller than it. if n is odd, median =mode><=mean. If n is even then median = mode ><=mean, in both case median is mode. 