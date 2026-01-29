/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    //count difference bits in same position.
    let result = x^y // this returns a number
    result = result.toString(2).split("").reduce((count, curr)=> curr==="1"?count+1:count,0)
    return result
};