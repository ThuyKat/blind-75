/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // non-negative x
    // return square root of x, only the integer part, leave the decimal part
    // not use Math.sqrt
    //1,4,9,16,25
    // so we find i*i that is > x and j*j that is <x then the one we are looking for should be between j and i
    let start = 0
    let end = x
    let mid = Math.floor(start+(end-start)/2)
    console.log("start: " + start + ", end: " + end + ", mid: " + mid)
    while(start<mid){
        if(mid*mid ==x){
            return mid
        }else if(mid*mid >x){
            end = mid-1
        }else {
            start = mid // include mid 
        }
        mid = Math.floor(start+(end-start)/2)
        console.log("start: " + start + ", end: " + end + ", mid: " + mid)
    }
    return start
};
// Example usage:
console.log(mySqrt(1)); // Output: 2