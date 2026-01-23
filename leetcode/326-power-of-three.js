/**
 * @param {number} n
 * @return {boolean}
 */
n=27
var isPowerOfThree = function(n) {
    let t = n.toString(3)
    console.log(t)
    let count = 0
    for(let i=0;i<t.length;i++){
        console.log(t[i])
        count+=Number(t[i])
    }
    console.log(count)
    if(count>1){
        return false
    }
    return true     
};
console.log(isPowerOfThree(n))