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
    //5!/3!*2! = 4*5/2
    // its actually the way to pick out y positions in k+y positions
    //(k+y)!/y!
    //112, 121,211
    if (n <= 2) return n;
    
    // Helper function for combinations C(n,r)
    function combinations(n, r) {
        if (r > n - r) r = n - r; // Use symmetry
        let result = 1;
        for (let i = 0; i < r; i++) {
            result = result * (n - i) / (i + 1);
        }
        return Math.round(result);
    }
    
    let result = 0;
    
    // For each possible number of 2-steps (y)
    for (let y = 0; y <= Math.floor(n/2); y++) {
        // If we take y steps of size 2, we need (n - 2*y) steps of size 1
        // Total steps: y + (n - 2*y) = n - y
        // Choose y positions out of (n-y) total positions for the 2-steps
        result += combinations(n - y, y);
    }
    
    return result;

};