/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    //let sum = T0+T1+T2 --> T3, if we take sum +T3 -T0 we get T4
    // to keep track of the index so we know where to stop, we use an array
    if(n<3&&n>0){
        return 1
    }
    if(n==0){
        return 0
    }
    let sum = [0,1,1]
    while (sum.length<=n){
        let nextEl = sum[sum.length-1]+sum[sum.length-2]+sum[sum.length-3]
        sum.push(nextEl)
    }
    return sum.at(-1) 
};
