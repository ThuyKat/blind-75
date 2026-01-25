/**
 * @param {number} n
 * @return {boolean}
 */
n=27
// var isPowerOfThree = function(n) {
//     let t = n.toString(3)
//     console.log(t)
//     let count = 0
//     for(let i=0;i<t.length;i++){
//         console.log(t[i])
//         count+=Number(t[i])
//     }
//     console.log(count)
//     if(count>1){
//         return false
//     }
//     return true     
// };
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let t = n.toString(3)
    if (n<1){
        return false
    }
    let set = t.split("0").filter(item=>item!=="")
    console.log(set)
    if(set.length===1 && set[0]==="1"){
        return true
    }
    return false
};
console.log(isPowerOfThree(n))