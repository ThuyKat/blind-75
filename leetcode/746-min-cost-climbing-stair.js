/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    //cost[i] is the cost of ith step on a stair case
    //one or two steps
    //min cost to the top
        //to reach index 2, either from index 0 or 1, since cost[0] is smaller first step is from index 0, to reach index 3, either from index 1 or 2
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};
