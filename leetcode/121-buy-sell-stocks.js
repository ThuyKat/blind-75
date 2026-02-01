/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //buy lowest sell highest
    //min can be at the end so if we find min its unsure to be the buy day
    //price difference between 2 days, we need to find the max total sum
    let maxProfit = 0
    let currentProfit = 0
    for(let i = prices.length-1;i>=0;i--){
        currentProfit+=prices[i]-prices[i-1]
        if(currentProfit<0){
            currentProfit=0
        }
        if(currentProfit>maxProfit){
            maxProfit = currentProfit
        }
    }
    return maxProfit
};