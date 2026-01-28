/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ""
    // convert a and b to decimal
    a = BigInt('0b' + a)
    b = BigInt('0b'+b)
    let sum = a + b
    if(sum ==0n){
        return "0"
    }
    while (sum >0n){
        result = (sum%2n).toString() + result
        sum = sum /2n
    }
    
    return result
    
};
// Example usage:
console.log(addBinary("1010", "1011")); // Output: "10101"

/*
NOTE: 
parseInt() returns a Number, which in JavaScript is a 64-bit floating-point (IEEE 754). Turn a binary into a number: ParseInt(binary_str, 2).

It can safely represent integers up to 2^53 - 1 (≈ 9 * 10^15) using the Number type.

If your binary number exceeds 53 bits, you may lose precision.

BigInt division automatically behaves like floor division. Math.floor() only works with Number, not BigInt.

The n suffix tells JavaScript that the number is a BigInt literal, not a regular Number. For example "100n" is a BigInt, while "100" is a regular Number.

*/