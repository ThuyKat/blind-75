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
    if(x==0){
        return 0
    }
    let start = 1 // this make sure mid >= start
    let end = x
    let mid = Math.floor(start+(end-start)/2)
    
    while(start<mid){
        if(mid*mid ==x){
            return mid
        }else if(mid*mid >x){
            end = mid // this make sure end*end will never <x which force the result value to either mid or start
        }else {
            start = mid // include mid 
        }
        mid = Math.floor(start+(end-start)/2)
    }

    return start
};