/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // if we start from 0, then we got to calculate F(2)
    // the goal is calculating F(n), so we start from fib(n) = fib(n-1) +fib(n-2)
    if(n==1){
        return 1
    }
    if(n==0){
        return 0
    }
    return fib(n-1) + fib(n-2)
};
