/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // if we start from 0, then we got to calculate F(2)
    // the goal is calculating F(n), so we start from fib(n) = fib(n-1) +fib(n-2)
    if(n<=1){
        return n
    }
    return fib(n-1) + fib(n-2)
};
// time complexity: O(2^n) exponential
// space complexity: O(n) the max depth of the recursion tree
// better to remember previous calculated results to avoid recomputation
// use dynamic programming with memoization
// or use iterative approach with tabulation:
var fib = function(n) {
    if(n<=1){
        return n
    }
    let dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    for(let i=2;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
// time complexity: O(n)
// space complexity: O(n)
// can be optimized to O(1) space by only keeping track of the last two Fibonacci numbers:
var fib = function(n) {
    if(n<=1){
        return n
    }
    let a = 0
    let b = 1
    for(let i=2;i<=n;i++){
        let temp = a + b
        a = b
        b = temp
    }
    return b
};
// time complexity: O(n)
// space complexity: O(1)
