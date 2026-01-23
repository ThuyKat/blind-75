/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    //number of 1s in n's bit representation
    //1=1, 11=3,111=7, 1111=15
    let count = 0
    while(n>0){
        if(n%2 ==1){
            count++
        }
        n= n>>1
    }
    return count
};  
//count, if n mod 2 --> is even shift to right, is odd then count++, then shift to right, keep going until n is 0
//time: O(log n) space: O(1)