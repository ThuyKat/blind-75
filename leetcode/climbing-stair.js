/*
    You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n step 
    // either 1 or 2 steps
    // how many ways to go to top? so k+2y =n, 
    // n <46
    // find y that 2y<=n
    // each (x,y) can have different combination of steps
    //n=3, i=0 --> (3,0) or i=1 --> (1,2) or (2,1) --> 1 numbers 1 and 1 numbers 2 --> 2 times --> 2 *(2-1) --> 2!
    // we have y step 2s and k steps 1 --> y+k positions 
    // need to find different combinations of y(2)+k(1) positions
    //22211,22112,22121,21122,11222,12122
    //3 * 2
    // its actually the way to pick out y positions in k+y positions
    //(k+y)!/y!
    
    
    let y = 0
    let result =2
    // consider all combinations except for when y = n/2 and y=0
    for(let i=1;i<n/2;i++){
        y++
        result = result+ y*(n-2*y)
    }
    return result

};
