/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let nbit = n.toString(2).padStart(32,0)
    let reverse = ""
    for(let i = nbit.length-1;i>=0;i--){
        reverse+=nbit[i]
    }
    n = parseInt(reverse,2) >>>0
    return n
};