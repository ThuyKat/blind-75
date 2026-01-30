/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    // how to remove the leading 0?
    let numbit= ((~num)>>>0).toString(2).slice(32- num.toString(2).length) //>>>0 force to 32 bits presentation
    console.log(numbit)
    let result = parseInt(numbit,2) //interpret as base 2
    return result;
};
console.log(findComplement(5)) //2